import React, { createContext, useState, useContext, useCallback } from 'react'
import Notification from '../Components/Notification/Notification'

/**
 * Contexto de Notificaciones
 * Permite mostrar mensajes temporales en cualquier parte de la aplicación
 */
const NotificationContext = createContext()

/**
 * Proveedor del contexto de notificaciones
 * @param {React.ReactNode} children Componentes hijos
 */
export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([])

    /**
     * Función para disparar una notificación
     * @param {string} message Texto descriptivo
     * @param {string} type Tipo visual ('info', 'error', 'success', etc)
     */
    const showNotification = useCallback((message, type = 'info') => {
        const id = Date.now()
        setNotifications(prev => [...prev, { id, message, type }])

        // Auto-eliminar la notificación después de 3 segundos
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id))
        }, 3000)
    }, [])

    return (
        <NotificationContext.Provider value={{ showNotification, notifications }}>
            {children}
            {/* Componente que renderiza las notificaciones activas */}
            <Notification />
        </NotificationContext.Provider>
    )
}

/**
 * Hook personalizado para consumir el contexto de notificaciones
 */
export const useNotification = () => useContext(NotificationContext)

