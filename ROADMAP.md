# EcoNotas - Product Roadmap 2025

Roadmap de desarrollo de funcionalidades para EcoNotas, organizado por fases y prioridades.

---

## 📊 Estado Actual (v1.0)

### ✅ Implementado
- ✅ Grabación de audio sincronizada con dibujos
- ✅ Canvas infinito con herramientas de dibujo
- ✅ Sistema de comentarios con timestamps
- ✅ Gestión de sesiones (crear, editar, eliminar, compartir)
- ✅ Autenticación anónima con Firebase
- ✅ UI moderna con tema oscuro
- ✅ Actualización en tiempo real de comentarios

---

## 🎯 Fase 1: Métricas y Engagement (PRÓXIMA)

### Objetivo
Agregar métricas de uso y sistema de calificación para mejorar engagement y descubrimiento de contenido.

### 1.1 Sistema de Reproducciones 👁️

**Prioridad**: Alta  
**Complejidad**: Media  
**Tiempo estimado**: 2-3 días

**Funcionalidades**:
- Contador de reproducciones por sesión
- Incremento automático al reproducir
- Visualización en Dashboard (ícono de ojo + número)
- Evitar duplicados por mismo usuario en 24h
- Ordenar sesiones por reproducciones

**Base de datos**:
```javascript
// Firestore: sessions collection
{
  viewCount: 0,                    // Número total de vistas
  lastViewedBy: [],                // Array de {userId, timestamp}
  uniqueViewers: 0                 // Conteo de usuarios únicos
}
```

**UI en Dashboard**:
```
┌──────────────────────────────────────┐
│ 📝 Clase de Cálculo - Derivadas     │
│ 📅 28 Nov 2025  ⏱️ 45:30            │
│ 👁️ 127 vistas  ⭐ 4.5 (23)         │
└──────────────────────────────────────┘
```

---

### 1.2 Sistema de Calificación con Estrellas ⭐

**Prioridad**: Alta  
**Complejidad**: Media  
**Tiempo estimado**: 3-4 días

**Funcionalidades**:
- Calificación de 1-5 estrellas por sesión
- Promedio de calificaciones visible en Dashboard
- Solo usuarios autenticados pueden calificar
- Un usuario = una calificación (puede cambiarla)
- Modal de calificación al finalizar reproducción
- Filtro en Dashboard por calificación

**Base de datos**:
```javascript
// Nueva colección: ratings
{
  sessionId: "session123",
  userId: "user456",
  rating: 5,                       // 1-5
  createdAt: Timestamp,
  comment: "Excelente explicación" // Opcional
}

// Firestore: sessions collection
{
  ratingAverage: 4.5,
  ratingCount: 23,
  ratingBreakdown: {
    5: 15,
    4: 6,
    3: 2,
    2: 0,
    1: 0
  }
}
```

**UI Components**:
- `RatingStars.jsx` - Visualización de estrellas (read-only)
- `RatingInput.jsx` - Input para calificar (interactivo)
- `RatingModal.jsx` - Modal post-reproducción
- `RatingFilter.jsx` - Filtro en Dashboard

**Índice Firestore requerido**:
```
Collection: ratings
Fields: sessionId (Ascending), userId (Ascending)
```

---

### 1.3 Analytics Dashboard 📈

**Prioridad**: Media  
**Complejidad**: Alta  
**Tiempo estimado**: 5-7 días

**Funcionalidades**:
- Panel de estadísticas para el creador
- Gráficas de reproducciones en el tiempo
- Retención de audiencia (% que completa la sesión)
- Heatmap de timestamps más revisados
- Engagement de comentarios

**Métricas a trackear**:
- Reproducciones por día/semana/mes
- Tiempo promedio de visualización
- Tasa de completitud (finish rate)
- Comentarios por minuto de audio
- Usuarios recurrentes vs nuevos

---

## 🤖 Fase 2: Inteligencia Artificial

### Objetivo
Utilizar IA para mejorar la experiencia de aprendizaje y descubrimiento.

### 2.1 Transcripción Automática de Audio 🎙️→📝

**Prioridad**: Alta  
**Complejidad**: Media  
**Tiempo estimado**: 4-5 días

**Tecnología**:
- **Opción A**: Web Speech API (gratis, navegador)
- **Opción B**: Google Cloud Speech-to-Text ($$$)
- **Opción C**: OpenAI Whisper API ($$)
- **Recomendado**: Web Speech API + fallback a Whisper

**Funcionalidades**:
- Transcripción automática durante grabación
- Edición manual de transcripción
- Búsqueda de palabras clave en transcripción
- Saltar a timestamp de palabra encontrada
- Exportar transcripción (TXT, SRT, VTT)

**UI**:
- Panel de transcripción (como comentarios)
- Resaltado de palabra actual durante reproducción
- Editor de texto con timestamps
- Descarga de subtítulos

---

### 2.2 Resumen Automático con IA 🧠

**Prioridad**: Media  
**Complejidad**: Media  
**Tiempo estimado**: 3-4 días

**Tecnología**:
- OpenAI GPT-4 API
- Anthropic Claude API (alternativa)
- Llama 3 (self-hosted, sin costos API)

**Funcionalidades**:
- Resumen automático de transcripción
- Bullet points de conceptos clave
- Generación de título descriptivo
- Tags/categorías automáticas
- Preguntas de repaso generadas por IA

**Ejemplo de uso**:
```
📝 Resumen generado por IA:
• Introducción a derivadas (0:00-5:30)
• Regla de la cadena explicada (5:30-15:00)
• Ejemplos prácticos (15:00-30:00)
• Ejercicios propuestos (30:00-45:00)

🏷️ Tags: Cálculo, Matemáticas, Derivadas, Tutorial
```

---

### 2.3 Asistente de Estudio Inteligente 🎓

**Prioridad**: Media  
**Complejidad**: Alta  
**Tiempo estimado**: 7-10 días

**Funcionalidades**:
- Chat con la sesión (Q&A sobre el contenido)
- Generación de flashcards automáticas
- Quizzes adaptativos basados en la sesión
- Detección de conceptos difíciles (basado en repeticiones)
- Sugerencias de sesiones relacionadas

**Integración**:
- RAG (Retrieval Augmented Generation)
- Vector embeddings de transcripciones
- Pinecone o Weaviate para búsqueda semántica

---

### 2.4 Traducción Automática 🌐

**Prioridad**: Baja  
**Complejidad**: Media  
**Tiempo estimado**: 3-4 días

**Funcionalidades**:
- Traducción de transcripciones a múltiples idiomas
- Subtítulos en tiempo real
- Comentarios multiidioma
- Detección automática del idioma original

---

## 🎨 Fase 3: UI/UX Premium

### Objetivo
Llevar el diseño a un nivel profesional y premium.

### 3.1 Herramientas de Dibujo Avanzadas ✍️

**Prioridad**: Alta  
**Complejidad**: Alta  
**Tiempo estimado**: 7-10 días

**Funcionalidades**:
- **Formas geométricas**: Círculos, rectángulos, flechas
- **Herramienta de texto**: Agregar texto editable
- **Highlighter**: Resaltador semitransparente
- **Líneas rectas**: Con Shift presionado
- **Selector y mover**: Seleccionar y mover elementos
- **Capas**: Sistema de layers para organizar
- **Grupos**: Agrupar elementos
- **Alineación**: Herramientas de snap y alineación

**Inspiración**: 
- Excalidraw (simplicidad)
- Miro (colaboración)
- Notability (herramientas educativas)

---

### 3.2 Temas y Personalización 🎨

**Prioridad**: Media  
**Complejidad**: Baja  
**Tiempo estimado**: 2-3 días

**Funcionalidades**:
- Modo claro / oscuro (ya existe oscuro)
- Temas personalizables (Slate, Ocean, Forest, Sunset)
- Personalización de colores de UI
- Tipografía personalizable
- Tamaño de fuente ajustable
- Contraste alto para accesibilidad

**Temas sugeridos**:
- 🌙 **Dark Slate** (actual)
- ☀️ **Light Clean** (minimalista blanco)
- 🌊 **Ocean Blue** (azules y cian)
- 🌲 **Forest Green** (verdes naturales)
- 🌅 **Sunset Orange** (cálido naranja/rosa)
- ⚫ **Pure Dark** (OLED friendly)

---

### 3.3 Animaciones y Micro-interacciones ✨

**Prioridad**: Baja  
**Complejidad**: Media  
**Tiempo estimado**: 3-4 días

**Mejoras**:
- Transiciones fluidas entre páginas
- Animaciones de carga personalizadas
- Confetti al guardar sesión exitosamente
- Progress bars animados
- Skeleton loaders elegantes
- Tooltips animados con Framer Motion
- Gestos touch avanzados (swipe, pinch-zoom)

---

### 3.4 Dashboard Rediseñado 📊

**Prioridad**: Media  
**Complejidad**: Media  
**Tiempo estimado**: 4-5 días

**Mejoras**:
- Vista de grid vs lista
- Tarjetas de sesión más visuales (thumbnails)
- Filtros avanzados (fecha, duración, rating, tags)
- Búsqueda con autocompletado
- Ordenamiento múltiple
- Acciones rápidas (reproducir, compartir, eliminar)
- Categorías y carpetas
- Sesiones destacadas / favoritas

**Mockup conceptual**:
```
┌─────────────────────────────────────────────┐
│  🔍 [Buscar...]  📅 Filtros  📊 Grid ≡ List │
├─────────────────────────────────────────────┤
│                                             │
│  ⭐ Favoritas                               │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │ [📸] │ │ [📸] │ │ [📸] │                │
│  │ Calc │ │ Fís  │ │ Quím │                │
│  │⭐4.5  │ │⭐4.8  │ │⭐4.2  │                │
│  │👁️ 127 │ │👁️ 89  │ │👁️ 56  │                │
│  └──────┘ └──────┘ └──────┘                │
│                                             │
│  📚 Todas las sesiones                      │
│  ...                                        │
└─────────────────────────────────────────────┘
```

---

## 👥 Fase 4: Colaboración y Social

### Objetivo
Convertir EcoNotas en una plataforma social de aprendizaje.

### 4.1 Perfiles de Usuario 👤

**Prioridad**: Media  
**Complejidad**: Media  
**Tiempo estimado**: 5-6 días

**Funcionalidades**:
- Perfiles públicos con bio y foto
- Sesiones públicas vs privadas
- Seguidores y siguiendo
- Badges y achievements
- Estadísticas públicas (sesiones creadas, vistas totales)

---

### 4.2 Colaboración en Tiempo Real 👥

**Prioridad**: Alta (para educación)  
**Complejidad**: Muy Alta  
**Tiempo estimado**: 10-15 días

**Funcionalidades**:
- Múltiples usuarios dibujando simultáneamente
- Cursores visibles de otros usuarios
- Chat en vivo durante sesión
- Permisos (viewer, editor, moderador)
- Sesiones sincronizadas (todos ven lo mismo)

**Tecnología**:
- WebRTC para comunicación P2P
- Firebase Realtime Database para sincronización
- Y-js o Automerge para CRDT

---

### 4.3 Comunidad y Descubrimiento 🌎

**Prioridad**: Media  
**Complejidad**: Alta  
**Tiempo estimado**: 7-10 días

**Funcionalidades**:
- Feed de sesiones públicas populares
- Buscar por tag/categoría/tema
- Colecciones curadas
- Trending topics
- Recomendaciones personalizadas
- Sistema de reportes/moderación

---

### 4.4 Features Sociales Avanzados 💬

**Prioridad**: Baja  
**Complejidad**: Media  
**Tiempo estimado**: 5-7 días

**Funcionalidades**:
- Comentarios anidados (threads)
- @menciones en comentarios
- Reacciones emoji a comentarios
- Compartir en redes sociales
- Embed de sesiones en otros sitios
- Notificaciones push

---

## 📱 Fase 5: Multiplataforma

### 5.1 Progressive Web App (PWA) 📲

**Prioridad**: Alta  
**Complejidad**: Baja  
**Tiempo estimado**: 2-3 días

**Funcionalidades**:
- Instalable en dispositivos móviles
- Funciona offline (con limitaciones)
- Caché de sesiones descargadas
- Iconos y splash screens
- Updates automáticos

---

### 5.2 App Móvil Nativa 📱

**Prioridad**: Media (largo plazo)  
**Complejidad**: Muy Alta  
**Tiempo estimado**: 30-45 días

**Tecnología**: React Native o Flutter

**Funcionalidades específicas móviles**:
- Dibujo con stylus optimizado (presión)
- Grabación en background
- Integración con Apple Pencil / S Pen
- Picture-in-Picture durante reproducción
- Widgets

---

### 5.3 Desktop App 💻

**Prioridad**: Baja  
**Complejidad**: Media  
**Tiempo estimado**: 7-10 días

**Tecnología**: Electron

**Ventajas**:
- Acceso a sistema de archivos local
- Mejor rendimiento de canvas
- Atajos de teclado avanzados
- Múltiples ventanas
- Integración con OS (notificaciones nativas)

---

## 💰 Fase 6: Monetización (Modelo Freemium)

### 6.1 Plan Gratuito (Actual)

**Límites**:
- ✅ Sesiones ilimitadas
- ✅ Grabaciones hasta 120 minutos
- ✅ Comentarios ilimitados
- ✅ Compartir con hasta 10 personas
- ❌ Sin transcripción automática
- ❌ Sin resúmenes con IA
- ❌ Analytics básicos

---

### 6.2 Plan Premium ($4.99/mes) ⭐

**Features adicionales**:
- ✅ Grabaciones hasta 4 horas
- ✅ Transcripción automática ilimitada
- ✅ Resúmenes con IA (GPT-4)
- ✅ Analytics avanzados
- ✅ Temas premium
- ✅ Exportar a PDF/Video
- ✅ Sin marca de agua
- ✅ Prioridad en soporte
- ✅ Colaboración hasta 50 personas

---

### 6.3 Plan Educación ($9.99/mes) 🎓

**Para profesores y instituciones**:
- ✅ Todo de Premium
- ✅ Clase ilimitada de estudiantes
- ✅ Asignaciones y tareas
- ✅ Tracking de progreso de estudiantes
- ✅ Integración con LMS (Canvas, Moodle)
- ✅ Reportes de uso
- ✅ SSO (Single Sign-On)
- ✅ Dominios personalizados

---

## 🔧 Fase 7: Integraciones

### 7.1 Exportación Avanzada 📤

**Formatos**:
- PDF con timeline de dibujos
- Video MP4 (audio + canvas animado)
- GIF animado de dibujos
- Presentación PowerPoint
- Markdown con timestamps
- Anki deck (flashcards)

---

### 7.2 Integraciones con Plataformas 🔗

**LMS (Learning Management Systems)**:
- Canvas
- Moodle
- Blackboard
- Google Classroom

**Productividad**:
- Notion (embed + sincronización)
- Obsidian (plugin)
- Roam Research
- Google Drive
- Dropbox

**Comunicación**:
- Slack (notificaciones)
- Discord (bot)
- Microsoft Teams

---

## 🎯 Métricas de Éxito

### KPIs a Trackear

**Engagement**:
- DAU/MAU (Daily/Monthly Active Users)
- Sesiones creadas por usuario
- Tiempo promedio de uso
- Tasa de retención (D1, D7, D30)

**Calidad**:
- Rating promedio de sesiones
- Comentarios por sesión
- Shares por sesión
- Reproducciones recurrentes

**Crecimiento**:
- Nuevos usuarios por semana
- Conversión gratuito → premium
- Viral coefficient (invitaciones)

---

## 📅 Timeline Sugerido

### Q1 2025 (Enero - Marzo)
- ✅ [Completado] Sistema base de comentarios
- 🔄 [En progreso] Fase 1.1: Sistema de reproducciones
- 🔄 [En progreso] Fase 1.2: Calificación con estrellas
- 📅 Fase 3.1: Herramientas de dibujo avanzadas

### Q2 2025 (Abril - Junio)
- 📅 Fase 2.1: Transcripción automática
- 📅 Fase 2.2: Resúmenes con IA
- 📅 Fase 1.3: Analytics Dashboard
- 📅 Fase 5.1: PWA

### Q3 2025 (Julio - Septiembre)
- 📅 Fase 4.1: Perfiles de usuario
- 📅 Fase 4.3: Comunidad y descubrimiento
- 📅 Fase 3.4: Dashboard rediseñado
- 📅 Fase 6: Lanzamiento de planes premium

### Q4 2025 (Octubre - Diciembre)
- 📅 Fase 4.2: Colaboración en tiempo real
- 📅 Fase 2.3: Asistente de estudio inteligente
- 📅 Fase 7: Integraciones principales
- 📅 Marketing y growth

---

## 🚀 Próximos Pasos Inmediatos

### Sprint 1 (Esta semana)
1. ✅ Diseño de schema de base de datos para views/ratings
2. ✅ Implementar contador de reproducciones
3. ✅ UI de visualización en Dashboard

### Sprint 2 (Próxima semana)
1. Implementar sistema de rating backend
2. Crear componentes de UI para estrellas
3. Agregar modal de rating post-reproducción
4. Testing y ajustes finales

---

## 💡 Ideas Adicionales (Backlog)

**Nice to have**:
- 🎮 Gamificación (puntos, levels, achievements)
- 🏆 Leaderboards de mejores sesiones/creadores
- 🎁 Referral program (invita amigos)
- 📊 Comparación de progreso con otros
- 🔔 Recordatorios inteligentes de estudio
- 🎯 Metas y objetivos de aprendizaje
- 📝 Notas privadas (además de comentarios públicos)
- 🎨 Templates de canvas prediseñados
- 🔊 Mejora de audio con IA (noise cancellation)
- 🎵 Background music para sesiones
- 📹 Cámara picture-in-picture (cara del profesor)
- 🖼️ Importar imágenes al canvas
- 📐 Herramientas matemáticas (ecuaciones, gráficas)
- 🧪 Símbolos científicos
- 🗣️ Text-to-speech de comentarios
- ♿ Accesibilidad mejorada (screen readers)

---

## 📖 Referencias y Competencia

**Inspiración**:
- **Notability** - Excelente UI para note-taking con audio
- **Explain Everything** - Colaboración y whiteboard
- **Otter.ai** - Transcripción automática de calidad
- **Loom** - Simplicidad en grabar y compartir
- **Miro** - Colaboración visual
- **Figma** - Real-time collaboration done right

**Diferenciadores de EcoNotas**:
- ✨ Sincronización perfecta audio-dibujo
- 🆓 Plan gratuito generoso
- 🎨 UI moderna y hermosa
- 🚀 Performance excepcional
- 📱 Multiplataforma desde el inicio
- 🤖 IA integrada nativamente

---

**Última actualización**: Noviembre 2025  
**Versión actual**: v1.0  
**Próximo release**: v1.1 (Sistema de métricas)
