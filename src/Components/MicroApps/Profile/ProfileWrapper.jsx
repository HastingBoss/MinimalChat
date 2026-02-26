import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ContactsContext } from '../../../Context/ContactsContext'
import ProfileModal from './ProfileModal'

export default function ProfileWrapper() {
    const { contacts, channels } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const navigate = useNavigate()

    // User data quemada temporal para mi propio perfil, simulando estar logueado
    const currentUser = {
        name: 'Marshall Brown',
        job_title: 'Líder de Producto',
        profile_picture: 'https://randomuser.me/api/portraits/men/32.jpg',
        work_hours: '09:00 - 18:00',
        availability: 'Disponible',
        bio: 'Liderando la visión del producto y asegurando la excelencia en cada sprint. Entusiasta de la IA y el diseño minimalista.',
        tenure: '4 años en la empresa'
    }

    if (contact_id === 'me') {
        return <ProfileModal userData={currentUser} onClose={() => navigate('/')} />
    }

    const contact = contacts.find(c => String(c.id) === contact_id) || channels.find(c => String(c.id) === contact_id)
    if (!contact) return null

    return <ProfileModal userData={contact} onClose={() => navigate(`/contact/${contact_id}`)} />
}
