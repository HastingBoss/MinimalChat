# Documentación de Integración de IA - MinimalChat

Esta sección detalla la implementación del **Bot IA** para el resumen de conversaciones, una de las funcionalidades más avanzadas de MinimalChat.

## 🤖 Tecnología Utilizada
- **Modelo**: `gemini-2.5-flash` (Google Generative AI).
- **Librería**: `@google/generative-ai`.
- **Arquitectura**: Integración directa en el cliente orientada a la eficiencia.

## 🛠️ Implementación Técnica

### 1. Gestión de Variables de Entorno
Se utiliza Vite para la inyección de la API Key mediante el prefijo `VITE_GEMINI_API_KEY`. 
> **Seguridad**: El archivo `.env` está excluido del control de versiones mediante `.gitignore` para proteger las credenciales.

### 2. Procesamiento de Contexto (Context Slicing)
Para optimizar el uso de tokens y mantener la relevancia, el sistema solo envía los últimos **30 mensajes** de la conversación al modelo. Cada mensaje se etiqueta con el remitente correspondiente ("Yo" o el nombre del contacto).

### 3. Prevención de Peticiones Duplicadas
Se implementó un estado `hasAttempted` dentro del componente `AiSummarizer.jsx`. Esto evita que React Strict Mode o re-renderizados accidentales disparen múltiples llamadas a la API, ahorrando cuota de uso.

### 4. Interfaz de Usuario (Glassmorphism)
El modal utiliza:
- `backdrop-filter: blur(8px)` para el efecto de fondo traslúcido.
- Animaciones CSS (`fadeIn`, `slideUp`) para una entrada suave.
- Estados de error específicos para límites de cuota (429) y modelos no disponibles (404).

## ✨ Prompt Engineering
El prompt utilizado instruye al modelo para actuar como un "asistente administrativo profesional", enfocándose en extraer:
1. Acuerdos alcanzados.
2. Tareas pendientes.
3. Puntos clave de la conversación.

## 🚀 Notas de Despliegue (Vercel)
Para que la funcionalidad sea operacional en producción, se debe añadir el secreto `VITE_GEMINI_API_KEY` en el panel de **Settings > Environment Variables** de Vercel y realizar un *redeploy*.
