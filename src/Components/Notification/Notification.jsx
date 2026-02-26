import React from 'react'
import { useNotification } from '../../Context/NotificationContext'
import './Notification.css'

export default function Notification() {
    const { notifications } = useNotification()

    return (
        <div className="notification-container">
            {notifications.map(n => (
                <div key={n.id} className={`notification ${n.type}`}>
                    {n.message}
                </div>
            ))}
        </div>
    )
}
