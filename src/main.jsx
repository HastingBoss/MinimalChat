// Importaciones principales
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css' // Estilos globales
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

// Renderizado de la aplicación en el elemento root del DOM
createRoot(document.getElementById('root')).render(
    // BrowserRouter habilita el enrutamiento en la aplicación
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
