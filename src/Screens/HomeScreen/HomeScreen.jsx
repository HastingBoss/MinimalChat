import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'

export default function HomeScreen() {
    return (
        <div className='screen'>
            <ContactSidebar />
            <div className='chat-container' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <h1>Bienvenido a MinimalChat</h1>
                <p>Selecciona un contacto para comenzar</p>
            </div>
        </div>
    )
}
