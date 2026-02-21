import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import './HomeScreen.css'

export default function HomeScreen() {
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = React.useState(false)

    return (
        <div className={`screen ${isLeftSidebarOpen ? 'left-open' : ''}`}>
            {/* Overlays para cerrar sidebars en móvil */}
            {isLeftSidebarOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setIsLeftSidebarOpen(false)}
                ></div>
            )}

            <i
                className="bi bi-list mobile-home-toggle"
                onClick={() => setIsLeftSidebarOpen(true)}
                title="Abrir menú"
            ></i>

            <div className={`sidebar-wrapper ${isLeftSidebarOpen ? 'open' : ''}`}>
                <ContactSidebar onClose={() => setIsLeftSidebarOpen(false)} />
            </div>

            <div className='chat-container home-container'>
                <div className='home-content'>
                    <div className='home-logo-box'>
                        <i className="bi bi-stack"></i>
                    </div>
                    <h1 className='home-title'>Bienvenido a MinimalChat</h1>
                    <p className='home-text'>
                        Selecciona un canal del panel lateral para unirte a las discusiones, o inicia un mensaje directo con tus compañeros de equipo.
                    </p>
                </div>
            </div>
        </div>
    )
}
