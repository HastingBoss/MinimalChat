import React, { useState } from 'react'
import { useNotification } from '../../Context/NotificationContext'
import './RightPanel.css'

export default function RightPanel({ contact }) {
    const { showNotification } = useNotification()
    const [isMemberListOpen, setIsMemberListOpen] = useState(false)

    if (!contact) return null

    // Usar la lista de miembros de los datos o una vacía por defecto
    const members = contact.memberList || []

    return (
        <div className='right-panel'>
            {/* Modal de Lista de Miembros Estilo Sidebar */}
            {isMemberListOpen && (
                <div className="custom-modal-overlay" onClick={() => setIsMemberListOpen(false)}>
                    <div className="member-list-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Miembros de {contact.name}</h3>
                            <i className="bi bi-x-lg close-icon" onClick={() => setIsMemberListOpen(false)}></i>
                        </div>
                        <div className="member-list-scroll">
                            {members.length > 0 ? members.map((member, index) => (
                                <div key={index} className="member-row" onClick={() => showNotification(`Perfil de ${member.name} (Próximamente)`, 'info')}>
                                    <img src={member.profile_picture} alt={member.name} />
                                    <div className="member-info">
                                        <p className="member-name">{member.name}</p>
                                        <p className="member-job">{member.job_title || 'Miembro'}</p>
                                    </div>
                                    <span className={`status-pill ${member.availability === 'En línea' ? 'online' : 'offline'}`}>
                                        {member.availability || 'Desconectado'}
                                    </span>
                                </div>
                            )) : (
                                <div className="no-members-msg">No hay información de miembros disponible</div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className='panel-section'>
                {contact.type === 'channel' ? (
                    <>
                        <h3>DETALLES DEL CANAL</h3>
                        <div className='panel-card'>
                            <div className='card-header'>
                                <span>Miembros</span>
                                <span className='member-count'>{members.length}</span>
                            </div>
                            <div className='member-preview-list' onClick={() => setIsMemberListOpen(true)}>
                                {members.length > 0 ? (
                                    <>
                                        {members.slice(0, 4).map((m, i) => (
                                            <img key={i} src={m.profile_picture} alt={m.name} />
                                        ))}
                                        {members.length > 4 && <div className='more-members'>+{members.length - 4}</div>}
                                    </>
                                ) : (
                                    <div className="empty-preview">Ver todos</div>
                                )}
                            </div>
                            <button className='add-people-btn' onClick={() => showNotification('Función de invitación restringida', 'error')}>Agregar personas</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h3>PERFIL DEL CONTACTO</h3>
                        <div className='panel-card dm-profile-card'>
                            <div className='dm-profile-image-container'>
                                <img src={contact.profile_picture} alt={contact.name} className='dm-profile-image' />
                                <span className={`status-dot ${contact.availability === 'En línea' ? 'online' : 'offline'}`}></span>
                            </div>
                            <h2 className='dm-profile-name'>{contact.name}</h2>
                            <p className='dm-profile-job'>{contact.job_title}</p>

                            <div className='dm-profile-details'>
                                <div className='detail-row'>
                                    <i className="bi bi-clock"></i>
                                    <span>{contact.work_hours || 'Sin horario definido'}</span>
                                </div>
                                <div className='detail-row'>
                                    <i className="bi bi-geo-alt"></i>
                                    <span>Remoto</span>
                                </div>
                            </div>
                            <button className='view-full-profile-btn' onClick={() => showNotification(`Viendo perfil completo de ${contact.name}`, 'info')}>Perfil completo</button>
                        </div>
                    </>
                )}
            </div>

            <div className='panel-section'>
                <div className='section-header'>
                    <h3>Elementos anclados</h3>
                    <span className='item-count'>3</span>
                </div>
                <div className='pinned-item' onClick={() => showNotification('Abriendo: Hoja de ruta Q3', 'success')}>
                    <i className="bi bi-pin-angle"></i>
                    <div>
                        <p className='pinned-title'>Hoja de ruta Q3</p>
                        <p className='pinned-desc'>Enlace a la hoja de ruta actualizada para Q3...</p>
                    </div>
                </div>
                <div className='pinned-item' onClick={() => showNotification('Abriendo: Sistema de Diseño V2', 'success')}>
                    <i className="bi bi-pin-angle"></i>
                    <div>
                        <p className='pinned-title'>Sistema de Diseño V2</p>
                        <p className='pinned-desc'>Enlace a la librería de componentes y documentación...</p>
                    </div>
                </div>
            </div>

            <div className='panel-section'>
                <div className='section-header'>
                    <h3>Archivos compartidos</h3>
                    <span className='see-all' onClick={() => showNotification('Explorador de archivos no disponible', 'info')}>Ver todo</span>
                </div>
                <div className='file-item' onClick={() => showNotification('Iniciando descarga: Specs_v1.pdf', 'success')}>
                    <div className='file-icon pdf'><i className="bi bi-file-earmark-pdf"></i></div>
                    <div className='file-info'>
                        <p className='file-name'>Specs_v1.pdf</p>
                        <p className='file-meta'>Ayer</p>
                    </div>
                </div>
                <div className='file-item' onClick={() => showNotification('Iniciando descarga: Borrador_Copy.docx', 'success')}>
                    <div className='file-icon docx'><i className="bi bi-file-earmark-word"></i></div>
                    <div className='file-info'>
                        <p className='file-name'>Borrador_Copy.docx</p>
                        <p className='file-meta'>Hace 2 días</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
