import React from 'react'
import { useParams } from 'react-router'
import { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'

export default function ContactScreen() {
    const { contacts } = useContext(ContactsContext)
    const { contacts_id } = useParams()
    const contact_selected = contacts.find(contact => contact.id === Number(contacts_id))
    return (
        <div>
            <ContactSidebar />
            {!contact_selected ? (
                <div>
                    <h2>El contacto no existe.</h2>
                </div>
            ) : (
                <div>
                    <h2>El contacto seleccionado es: {contact_selected.name}</h2>
                    <img src={contact_selected.profile_picture} alt={contact_selected.name} />
                    <p>{contact_selected.last_time_connection}</p>
                    <div>
                        {contact_selected.messages.map(message => (
                            <div key={message.id}>
                                <p>{message.message}</p>
                                <p>{message.created_at}</p>
                                <p>{message.is_read ? 'Read' : 'Not Read'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
