# MinimalChat - Trabajo Práctico 2

## Descripción del Desafío
MinimalChat es una aplicación de mensajería simplificada diseñada para cumplir con los requisitos del Trabajo Práctico de React. El desafío consistió en crear una interfaz de chat funcional, responsiva y accesible, permitiendo la comunicación simulada con diferentes contactos. Se puso especial énfasis en la gestión de estados globales, el enrutamiento dinámico y la adaptabilidad a dispositivos móviles.

## ✨ Innovación e Inteligencia Artificial
Este proyecto se destaca por la integración de tecnologías de IA para optimizar tanto el desarrollo como la experiencia final:

- **Diseño con UX Pilot**: La estructura visual y la paleta de colores *glassmorphism* fueron conceptualizadas inicialmente con **UX Pilot**, garantizando una interfaz equilibrada y moderna.
- **Resumen Inteligente (Gemini 2.5 Flash)**: Integración del SDK de Google para generar resúmenes automáticos. Este proceso fue optimizado con la asistencia del chatbot **Gemini** para la ingeniería de prompts y el manejo efectivo de cuotas de API.
- **Desarrollo con Antigravity**: La refactorización modular, la gestión de estados globales complejos y la resolución de bugs críticos (como el escalado en móviles) se realizaron con el apoyo de **Antigravity**, permitiendo transformar una base de código simple en una arquitectura robusta.

## 📊 Estadísticas del Proyecto
Datos actualizados según el historial de desarrollo:

- **Total de Commits**: 18
- **Tiempo de Desarrollo**: ~32 horas efectivas de programación.
- **Interacciones con IA**: +75 prompts estratégicos para diseño y debugging.
- **Archivos Desarrollados**: 23 archivos (Componentes, Contexts, Hooks y Servicios).
- **Cobertura Visual**: 100% Responsivo (Desde 320px hasta ultra-wide).

## 🚀 Funcionalidades Principales
- **Chat en tiempo real (simulado)**: Envío y recepción de mensajes con soporte para Markdown.
- **Bot IA de Resumen**: Analiza los últimos mensajes de cualquier chat y genera puntos clave.
- **Buscador de Mensajes**: Filtrado dinámico con resaltado animado de coincidencias.
- **Llamadas Inteligentes**: Sistema de llamadas con validación de horario laboral y avatares dinámicos.
- **Adaptive Info Panel**: Panel lateral que se integra al layout (>975px) o se despliega bajo demanda mediante el icono "i" en pantallas menores, optimizando el espacio.
- **Totalmente Responsivo**: Optimizado para dispositivos móviles críticos (320px) mediante unidades dinámicas (`dvh`) y menús off-canvas individuales.

## 🛠️ Stack Tecnológico
- **React 19**: Biblioteca principal para la UI basada en componentes.
- **React Router 7**: Manejo de rutas dinámicas y `searchParams`.
- **Google Generative AI SDK**: Integración con Gemini 2.5.
- **Bootstrap Icons**: Sistema de iconografía completo.
- **Vanilla CSS**: Estilos modulares extraídos de JSX para mejor mantenibilidad.

## 📦 Instalación y Uso
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Crear un archivo `.env` en la raíz con tu clave: `VITE_GEMINI_API_KEY=tu_clave`.
4. Iniciar el proyecto:
   ```bash
   npm run dev
   ```

## 📄 Notas de Desarrollo
El proyecto ha sido refactorizado para separar la lógica de presentación de los estilos, utilizando archivos `.css` independientes para cada componente. La funcionalidad de IA incluye manejo de errores robusto (cuotas y disponibilidad) y optimización de contexto para garantizar rapidez y precisión.
