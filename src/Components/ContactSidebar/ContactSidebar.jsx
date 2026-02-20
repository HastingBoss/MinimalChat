// Componente lateral derecho para la lista de contactos
import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'

export default function ContactSidebar() {
    // Consumir el contexto para mostrar la lista de contactos
    const { contacts } = useContext(ContactsContext)

    return (
        <div className='sidebar'>
            <h2>MinimalChat</h2>
            <div>
                {/* Mapeo de la lista de contactos para renderizar cada item */}
                {contacts.map(contact => (
                    <div key={contact.id}>
                        {/* Enlace de navegación hacia el chat específico */}
                        <Link to={`/contact/${contact.id}`} className='contact-item'>
                            <img src={contact.profile_picture} alt={contact.name} />
                            <div className='contact-info'>
                                <h3>{contact.name}</h3>
                                <p style={{ fontSize: '0.8rem', color: '#888', margin: '2px 0' }}>{contact.job_title}</p>
                                <span>{contact.last_time_connection}</span>
                            </div>
                        </Link>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}
