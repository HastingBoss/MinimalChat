import React, { useContext, useState } from 'react'
import { Link, useSearchParams, useParams, useNavigate } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import { useNotification } from '../../Context/NotificationContext'
import AiSummarizer from '../AiBot/AiSummarizer'
import './ContactSidebar.css'

export default function ContactSidebar({ onClose }) {
    const { contacts, channels, addContact, deleteContact } = useContext(ContactsContext)
    const { showNotification } = useNotification()
    const [searchParams, setSearchParams] = useSearchParams()
    const { contact_id } = useParams()
    const searchQuery = searchParams.get('search') || ''
    const navigate = useNavigate()

    // Estados para modales y menús
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newContactName, setNewContactName] = useState('')
    const [profileModalData, setProfileModalData] = useState(null)
    const [activeContactMenu, setActiveContactMenu] = useState(null)
    const [isAiModalOpen, setIsAiModalOpen] = useState(false)

    // Datos del usuario actual (quemados para el ejemplo)
    const currentUser = {
        name: 'Marshall Brown',
        job_title: 'Líder de Producto',
        profile_picture: 'https://randomuser.me/api/portraits/men/32.jpg',
        work_hours: '09:00 - 18:00',
        availability: 'Disponible',
        bio: 'Liderando la visión del producto y asegurando la excelencia en cada sprint. Entusiasta de la IA y el diseño minimalista.',
        tenure: '4 años en la empresa'
    }

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const filteredChannels = channels.filter(channel =>
        channel.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearchParams(value ? { search: value } : {})
    }

    const handleAddContactSubmit = (e) => {
        e.preventDefault()
        if (newContactName) {
            const id = Date.now()
            addContact({
                id,
                name: newContactName,
                job_title: 'Nuevo Miembro',
                profile_picture: `https://randomuser.me/api/portraits/thumb/men/${Math.floor(Math.random() * 90)}.jpg`,
                work_hours: '09:00 - 18:00',
                description: 'Nuevo contacto agregado recientemente.'
            })
            showNotification(`Contacto "${newContactName}" agregado`, 'success')
            setIsAddModalOpen(false)
            setNewContactName('')
            navigate(`/contact/${id}`)
        }
    }

    const handleActionMenu = (e, contactId) => {
        e.preventDefault()
        e.stopPropagation()
        setActiveContactMenu(activeContactMenu === contactId ? null : contactId)
    }

    return (
        <div className='sidebar' onClick={() => setActiveContactMenu(null)}>
            {/* Modal de Perfil (Genérico para usuario y contactos) */}
            {profileModalData && (
                <div className="custom-modal-overlay" onClick={() => setProfileModalData(null)}>
                    <div className="profile-modal" onClick={e => e.stopPropagation()}>
                        <div className="profile-header">
                            <img src={profileModalData.profile_picture} alt={profileModalData.name} />
                            <i className="bi bi-x-lg close-icon" onClick={() => setProfileModalData(null)}></i>
                        </div>
                        <div className="profile-body">
                            <h2>{profileModalData.name}</h2>
                            <p className="job-title">{profileModalData.job_title}</p>
                            <div className="profile-info-grid">
                                <div className="info-item">
                                    <span className="label">Disponibilidad</span>
                                    <span className="value status-online"><i className="bi bi-circle-fill"></i> {profileModalData.availability || 'En línea'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Horario laboral</span>
                                    <span className="value">{profileModalData.work_hours}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Tiempo en la empresa</span>
                                    <span className="value">{profileModalData.tenure || 'Recién ingresado'}</span>
                                </div>
                            </div>
                            <div className="profile-bio">
                                <span className="label">Acerca de</span>
                                <p>{profileModalData.bio || 'Sin descripción profesional disponible.'}</p>
                            </div>
                            <button className="primary-btn" onClick={() => setProfileModalData(null)}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}

            {isAddModalOpen && (
                <div className="custom-modal-overlay">
                    <div className="custom-modal">
                        <h3>Nuevo Contacto</h3>
                        <form onSubmit={handleAddContactSubmit}>
                            <input
                                autoFocus
                                type="text"
                                placeholder="Nombre completo"
                                value={newContactName}
                                onChange={(e) => setNewContactName(e.target.value)}
                            />
                            <div className="modal-actions">
                                <button type="button" onClick={() => setIsAddModalOpen(false)}>Cancelar</button>
                                <button type="submit" className="primary">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className='sidebar-top'>
                <div className="mobile-sidebar-header">
                    <h3>Contactos</h3>
                    <i className="bi bi-x-lg close-sidebar-icon" onClick={onClose}></i>
                </div>
                <div
                    className='logo-section'
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className='logo-icon'><i className="bi bi-stack"></i></div>
                    <h2>MinimalChat</h2>
                </div>

                <div className='user-profile-card' onClick={() => setProfileModalData(currentUser)}>
                    <img src={currentUser.profile_picture} alt={currentUser.name} />
                    <div className='user-status-info'>
                        <span className='user-name'>{currentUser.name}</span>
                        <span className='user-tag'>{currentUser.job_title}</span>
                    </div>
                    <i className="bi bi-chevron-down"></i>
                </div>

                <div className='search-container'>
                    <i className="bi bi-search search-icon"></i>
                    <input
                        type='text'
                        placeholder='Ir a...'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className='search-input'
                    />
                </div>
            </div>

            <div className='sidebar-scroll-area'>
                <div className='nav-section'>
                    <h3 className='section-title'>ACCESO RÁPIDO</h3>
                    <div className='quick-access-grid'>
                        <div
                            className='quick-item ai-bot'
                            onClick={() => {
                                const activeContact = contacts.find(c => String(c.id) === contact_id) ||
                                    channels.find(c => String(c.id) === contact_id);
                                if (activeContact) {
                                    setIsAiModalOpen(true);
                                } else {
                                    showNotification('Selecciona un chat primero para resumirlo con IA', 'info');
                                }
                            }}
                        >
                            <i className="bi bi-robot"></i>
                            <span>Bot IA</span>
                        </div>
                        <div className='quick-item schedule' onClick={() => showNotification('Sin eventos hoy', 'info')}>
                            <i className="bi bi-calendar3"></i>
                            <span>Calendario</span>
                        </div>
                    </div>
                </div>

                <div className='nav-section'>
                    <h3 className='section-title'>CANALES</h3>
                    <div className='nav-list'>
                        {filteredChannels.map(channel => (
                            <Link
                                key={channel.id}
                                to={`/contact/${channel.id}`}
                                className={`nav-item ${contact_id === String(channel.id) ? 'active' : ''}`}
                            >
                                <i className="bi bi-hash"></i> {channel.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='nav-section'>
                    <div className='section-header'>
                        <h3 className='section-title'>MENSAJES DIRECTOS</h3>
                        <i className="bi bi-plus-lg" style={{ cursor: 'pointer' }} onClick={() => setIsAddModalOpen(true)}></i>
                    </div>
                    <div className='nav-list'>
                        {filteredContacts.map(contact => (
                            <div key={contact.id} className="nav-item-container">
                                <Link
                                    to={`/contact/${contact.id}`}
                                    className={`contact-nav-item ${contact_id === String(contact.id) ? 'active' : ''}`}
                                >
                                    <img src={contact.profile_picture} alt={contact.name} className='mini-avatar' />
                                    <span>{contact.name}</span>
                                </Link>
                                <i className="bi bi-three-dots-vertical action-dots" onClick={(e) => handleActionMenu(e, contact.id)}></i>

                                {activeContactMenu === contact.id && (
                                    <div className="contact-context-menu" onClick={e => e.stopPropagation()}>
                                        <div className="menu-item" onClick={() => { setProfileModalData(contact); setActiveContactMenu(null); }}>
                                            <i className="bi bi-person"></i> Perfil
                                        </div>
                                        <div className="menu-item" onClick={() => { showNotification(`${contact.name} silenciado`, 'info'); setActiveContactMenu(null); }}>
                                            <i className="bi bi-bell-slash"></i> Silenciar
                                        </div>
                                        <div className="menu-item delete" onClick={() => { deleteContact(contact.id); showNotification(`Contacto eliminado`, 'success'); setActiveContactMenu(null); if (contact_id === String(contact.id)) navigate('/'); }}>
                                            <i className="bi bi-trash"></i> Eliminar
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='sidebar-footer' onClick={() => showNotification('Ajustes no disponibles', 'error')}>
                <div className='footer-item'>
                    <i className="bi bi-gear"></i>
                    <span>Configuración</span>
                </div>
            </div>

            {/* Modal del Bot IA */}
            {isAiModalOpen && (
                <AiSummarizer
                    messages={
                        (contacts.find(c => String(c.id) === contact_id) ||
                            channels.find(c => String(c.id) === contact_id))?.messages || []
                    }
                    contactName={
                        (contacts.find(c => String(c.id) === contact_id) ||
                            channels.find(c => String(c.id) === contact_id))?.name || "Chat"
                    }
                    onClose={() => setIsAiModalOpen(false)}
                />
            )}
        </div>
    )
}
