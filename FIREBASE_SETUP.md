# Firebase Setup Guide for EcoNotas

This guide will help you configure Firebase indexes and security rules required for the EcoNotas application.

## 🔥 Required Firestore Indexes

The comments system requires a composite index to query comments efficiently.

### Creating the Comments Index

**Method 1: Automatic (Recommended)**

1. Open your app and try to add a comment to a session
2. Open the browser console (F12)
3. You'll see an error like: `FirebaseError: The query requires an index`
4. Click the URL provided in the error message
5. It will take you directly to the Firebase Console with pre-filled settings
6. Click "Create Index"
7. Wait ~2 minutes for the index to build

**Method 2: Manual**

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `econotas-app`
3. Navigate to **Firestore Database** → **Indexes** tab
4. Click **"Create Index"**
5. Configure the index:
   - **Collection ID**: `comments`
   - **Fields to index**:
     - Field: `sessionId` | Order: Ascending
     - Field: `timestamp` | Order: Ascending
   - **Query Scopes**: Collection
6. Click **"Create"**
7. Wait for "Building" status to change to "Enabled" (~2 minutes)

### Index Status

Once created, you should see:
```
Collection ID: comments
Fields: sessionId (Ascending), timestamp (Ascending)
Query Scope: Collection
Status: Enabled
```

---

## 🔒 Firestore Security Rules (Optional - For Production)

Currently, your app uses basic security rules. For production deployment, update your Firestore security rules to properly protect user data.

### How to Update Security Rules

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `econotas-app`
3. Navigate to **Firestore Database** → **Rules** tab
4. Replace the existing rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // ============================================
    // SESSIONS
    // ============================================
    match /sessions/{sessionId} {
      // Anyone authenticated can read sessions
      allow read: if request.auth != null;
      
      // Only the owner can create their own sessions
      allow create: if request.auth != null 
                    && request.resource.data.userId == request.auth.uid;
      
      // Only the owner can update or delete their sessions
      allow update, delete: if request.auth != null
                            && resource.data.userId == request.auth.uid;
    }
    
    // ============================================
    // COMMENTS
    // ============================================
    match /comments/{commentId} {
      // Anyone authenticated can read comments
      allow read: if request.auth != null;
      
      // Anyone authenticated can create comments
      // Must include their own userId
      allow create: if request.auth != null
                    && request.resource.data.userId == request.auth.uid;
      
      // Only the comment author can update or delete their own comments
      allow update, delete: if request.auth != null
                            && resource.data.userId == request.auth.uid;
    }
  }
}
```

5. Click **"Publish"**
6. Confirm the changes

### What These Rules Do

- **Sessions**: Only owners can modify their own sessions, but all authenticated users can view them
- **Comments**: All authenticated users can read and create comments, but only the author can edit/delete their own comments
- **Anonymous Auth**: Works with anonymous authentication (current setup)

---

## 🗄️ Firebase Storage Rules (Optional - For Production)

If you want to restrict who can access uploaded audio files:

1. Go to **Firebase Console** → **Storage** → **Rules**
2. Update with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /audio/{audioFile} {
      // Anyone authenticated can read audio files
      allow read: if request.auth != null;
      
      // Only authenticated users can upload audio
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

---

## ✅ Verification Checklist

After setting up indexes and rules:

- [ ] Comments index shows "Enabled" status in Firebase Console
- [ ] Open a session in the app
- [ ] Click the "Comments" button - panel should open without errors
- [ ] Add a comment - should save successfully
- [ ] Refresh the page - comment should still be there
- [ ] Edit your comment - should update
- [ ] Delete your comment - should remove
- [ ] Open the same session in two browser tabs
- [ ] Add a comment in one tab - should appear in the other tab immediately

---

## 🐛 Troubleshooting

### Error: "The query requires an index"

**Solution**: The index hasn't been created yet or is still building.
- Check the Indexes tab in Firebase Console
- If status is "Building", wait a few minutes
- If index doesn't exist, create it using the steps above

### Error: "Missing or insufficient permissions"

**Solution**: Security rules are too restrictive or not updated.
- Verify you're signed in (even anonymously)
- Check security rules in Firebase Console
- Make sure rules allow authenticated users to read/write

### Comments don't appear in real-time

**Solution**: Real-time listeners might not be set up correctly.
- Check browser console for errors
- Verify the session has a valid `sessionId`
- Try refreshing the page
- Check network tab to see if WebSocket connection is established

### Index creation stuck on "Building"

**Solution**: Large collections can take time to index.
- Wait up to 5-10 minutes for large databases
- If stuck for >15 minutes, delete and recreate the index
- Check Firebase Console for any error messages

---

## 📚 Additional Resources

- [Firebase Firestore Indexes Documentation](https://firebase.google.com/docs/firestore/query-data/indexing)
- [Firebase Security Rules Documentation](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Console](https://console.firebase.google.com)

---

## 🆘 Need Help?

If you encounter issues not covered here:

1. Check the browser console for specific error messages
2. Verify your Firebase project configuration in `src/firebase.js`
3. Make sure you're using the correct Firebase project (`econotas-app`)
4. Check that all Firebase services (Firestore, Storage, Auth) are enabled in your project

---

**Last Updated**: November 2025  
**Firebase Project**: econotas-app
