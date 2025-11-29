# Firestore Database Indexes

Este documento describe los índices compuestos requeridos en Firestore para optimizar el rendimiento de las consultas en EcoNotas.

## Índices Requeridos

### 1. Comments Index (sessionId + timestamp)

**Propósito**: Permitir consultas eficientes de comentarios por sesión, ordenados cronológicamente.

**Configuración**:
- **Collection**: `comments`
- **Fields**:
  - `sessionId` - Ascending
  - `timestamp` - Ascending

**Usado por**:
- `getSessionComments()` - Obtiene todos los comentarios de una sesión ordenados por timestamp
- `subscribeToComments()` - Suscripción en tiempo real a comentarios de una sesión

---

## Cómo Crear los Índices

### Opción 1: Creación Automática (Recomendado)

1. Ejecuta la aplicación y navega a una sesión con comentarios
2. Firebase detectará la consulta que requiere el índice
3. En la consola del navegador (Developer Tools), aparecerá un error con un enlace
4. Haz clic en el enlace para crear el índice automáticamente
5. Espera unos minutos mientras Firebase construye el índice

**Ejemplo de error en consola**:
```
The query requires an index. You can create it here: https://console.firebase.google.com/...
```

### Opción 2: Creación Manual

1. Abre [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto `econotas-app`
3. Ve a **Firestore Database** > **Indexes** (pestaña)
4. Haz clic en **Create Index**
5. Configura el índice:
   - Collection ID: `comments`
   - Fields to index:
     - Field: `sessionId`, Order: Ascending
     - Field: `timestamp`, Order: Ascending
6. Query scope: Collection
7. Haz clic en **Create**
8. Espera a que el estado cambie de "Building" a "Enabled"

### Creating the Ratings Index (New!)

To query ratings efficiently by session, you need another index:

1. **Collection ID**: `ratings`
2. **Fields**:
   - `sessionId` (Ascending)
   - `userId` (Ascending)
3. **Query Scope**: Collection

This ensures we can quickly check if a specific user has rated a specific session.

---

## Estado de Índices

Puedes verificar el estado de tus índices en:
- Firebase Console > Firestore Database > Indexes
- Estados posibles:
  - 🔄 **Building**: El índice se está creando
  - ✅ **Enabled**: El índice está activo y funcionando
  - ❌ **Error**: Hubo un problema al crear el índice

---

## Consideraciones de Rendimiento

### Sin Índice
- ⚠️ Consultas lentas para sesiones con muchos comentarios
- ⚠️ Mayor consumo de recursos
- ⚠️ Posibles errores en producción

### Con Índice
- ✅ Consultas rápidas independientemente del número de comentarios
- ✅ Menor latencia en actualizaciones en tiempo real
- ✅ Mejor experiencia de usuario

---

## Monitoreo

Para verificar que el índice está funcionando correctamente:

1. **Consola del navegador**: No debe aparecer ningún warning sobre índices faltantes
2. **Firebase Console**: 
   - Ve a Firestore Database > Usage
   - Las lecturas deben ser eficientes (pocas lecturas por consulta)
3. **Rendimiento**: 
   - Los comentarios deben cargarse instantáneamente
   - El scroll automático debe ser fluido

---

## Índices Futuros (Planeados)

A medida que se agreguen nuevas funcionalidades, podrían requerirse índices adicionales:

- `comments` + `userId` + `createdAt` (para filtrar comentarios por usuario)
- `sessions` + `userId` + `createdAt` (ya existe por la query en `getUserSessions()`)

---

## Recursos

- [Firestore Indexes Documentation](https://firebase.google.com/docs/firestore/query-data/indexing)
- [Best Practices for Indexes](https://firebase.google.com/docs/firestore/best-practices#indexes)
- [Understanding Index Pricing](https://firebase.google.com/docs/firestore/pricing#index-entries)
