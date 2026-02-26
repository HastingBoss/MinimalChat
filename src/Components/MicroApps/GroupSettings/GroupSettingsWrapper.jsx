import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ContactsContext } from '../../../Context/ContactsContext'

export default function GroupSettingsWrapper() {
    const { channels } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const navigate = useNavigate()

    const channel = channels.find(c => String(c.id) === contact_id)
    if (!channel) return null

    return (
        <div className="custom-modal-overlay" onClick={() => navigate(`/contact/${contact_id}`)}>
            <div className="custom-modal" onClick={e => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Configuración de Grupo</h3>
                    <i className="bi bi-x-lg close-icon" style={{ cursor: 'pointer' }} onClick={() => navigate(`/contact/${contact_id}`)}></i>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p style={{ color: 'var(--text-muted)' }}>La configuración para este grupo estará disponible próximamente.</p>
                </div>
                <div className="modal-actions" style={{ marginTop: '20px' }}>
                    <button className="ai-close-btn" style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => navigate(`/contact/${contact_id}`)}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}
