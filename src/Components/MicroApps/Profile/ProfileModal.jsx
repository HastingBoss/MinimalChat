import React from 'react'
import { createPortal } from 'react-dom'
import './ProfileModal.css'

export default function ProfileModal({ userData, onClose }) {
    if (!userData) return null

    return createPortal(
        <div className="custom-modal-overlay" onClick={onClose}>
            <div className="profile-modal" onClick={e => e.stopPropagation()}>
                <div className="profile-header">
                    <img src={userData.profile_picture} alt={userData.name} />
                    <i className="bi bi-x-lg close-icon" onClick={onClose}></i>
                </div>
                <div className="profile-body">
                    <h2>{userData.name}</h2>
                    <p className="job-title">{userData.job_title}</p>
                    <div className="profile-info-grid">
                        <div className="info-item">
                            <span className="label">Disponibilidad</span>
                            <span className={`value ${userData.availability === 'En línea' ? 'status-online' : ''}`}>
                                {userData.availability === 'En línea' && <i className="bi bi-circle-fill"></i>}
                                {userData.availability || 'Desconectado'}
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="label">Horario laboral</span>
                            <span className="value">{userData.work_hours || 'Sin definir'}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Tiempo en la empresa</span>
                            <span className="value">{userData.tenure || 'Miembro reciente'}</span>
                        </div>
                    </div>
                    <div className="profile-bio">
                        <span className="label">Acerca de</span>
                        <p>{userData.bio || 'Sin descripción profesional disponible.'}</p>
                    </div>
                    <button className="primary-btn" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>, document.body
    )
}
