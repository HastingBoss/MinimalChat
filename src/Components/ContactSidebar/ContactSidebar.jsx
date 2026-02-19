import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'

export default function ContactSidebar() {
    const { contacts } = useContext(ContactsContext)

    return (
        <div>
            <h2>Free Chat</h2>
            <div>
                {contacts.map(contact => (
                    <div key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>
                            <img src={contact.profile_picture} alt={contact.name} />
                            <h3>{contact.name}</h3>
                            <span>{contact.last_time_connection}</span>
                        </Link>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}
