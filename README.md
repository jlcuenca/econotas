# EcoNotas
**Notas sincronizadas con audio** - Audio-synchronized note-taking application

EcoNotas allows you to record audio while drawing notes on an infinite canvas. Your drawings are automatically synchronized with the audio timeline, creating an interactive playback experience perfect for lectures, meetings, or tutorials.

## ✨ Features

### 🎙️ Audio Recording
- Record up to 120 minutes of audio
- Warning notification at 90% of max duration
- Automatic stop at maximum duration
- Support for multiple audio formats (webm, mp4)

### ✏️ Drawing & Annotation
- **Infinite canvas** for unlimited drawing space
- **Pen tool** with customizable colors and thickness
- **Eraser tool** with pressure sensitivity support
- **Undo/Redo** system for drawing history
- Drawings sync with audio timeline

### 💬 Comments System (NEW!)
- Add timestamped comments to any point in the audio
- Click comments to jump to specific timestamps
- Visual markers on the timeline showing all comments
- Edit and delete your own comments
- **Real-time synchronization** - comments appear instantly for all viewers
- Color-coded by user for easy identification

### 💾 Session Management
- Save sessions to Firebase cloud storage
- Dashboard to view all your saved sessions
- Edit session names
- Delete sessions
- Share sessions with others (read-only)

### 🎨 Modern UI
- Dark theme with Tailwind CSS
- Responsive design for desktop and mobile
- Smooth animations and transitions
- Touch-friendly controls

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (recommended) or 18+
- npm 9+
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jlcuenca/econotas.git
   cd econotas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   The project is already configured with Firebase, but you should set up the required Firestore indexes:
   
   📖 **See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed Firebase configuration instructions**

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173/econotas/`

### First-Time Setup

After running the app for the first time:

1. Create a test session by clicking "Nueva Sesión"
2. Allow microphone access when prompted
3. Record a short audio clip
4. Try drawing on the canvas
5. Save the session

When you first use the **Comments** feature, you'll need to create a Firestore index:
- Click the Comments button on a saved session
- Check the browser console for an index creation link
- Follow the link to create the index (takes ~2 minutes)
- See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed instructions

## 📖 Documentation

- [Firebase Setup Guide](./FIREBASE_SETUP.md) - Required indexes and security rules
- [Implementation Details](/.gemini/antigravity/brain/*/walkthrough.md) - Technical walkthrough

## 🛠️ Tech Stack

- **Frontend**: React 18.2 + Vite 5.2
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router 7.9
- **Backend**: Firebase
  - Authentication (Anonymous)
  - Firestore Database
  - Cloud Storage
- **Icons**: Lucide React
- **Canvas**: HTML5 Canvas API with custom drawing implementation

## 📦 Project Structure

```
econotas/
├── src/
│   ├── components/        # React components
│   │   ├── CommentPanel.jsx
│   │   ├── CommentItem.jsx
│   │   ├── CommentInput.jsx
│   │   ├── CommentMarker.jsx
│   │   ├── InfiniteCanvas.jsx
│   │   ├── DrawingToolbar.jsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── firebase.js       # Firebase configuration
│   ├── econotasapp.jsx   # Main app component
│   ├── Dashboard.jsx     # Session management
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── FIREBASE_SETUP.md     # Firebase setup guide
└── package.json
```

## 🚢 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to `gh-pages` branch
3. Make the app available at `https://jlcuenca.github.io/econotas/`

## 🐛 Troubleshooting

### Microphone Access Issues
- Ensure you're using HTTPS or localhost
- Check browser permissions for microphone access
- Try a different browser if issues persist

### Comments Not Loading
- Verify Firestore index is created (see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md))
- Check browser console for errors
- Ensure you're authenticated (even anonymously)

### Build Warnings
- Node 18 users will see engine warnings (app still works)
- Upgrade to Node 20+ to remove warnings

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React and Vite
- Powered by Firebase
- Icons by Lucide
