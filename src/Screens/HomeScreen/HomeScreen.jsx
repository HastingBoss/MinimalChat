import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactsContext } from '../../Context/ContactsContext'

export default function HomeScreen() {
    const { contacts } = useContext(ContactsContext)

    return (
        <div>
            <ContactSidebar contactsState={contacts} />

        </div>
    )
}
