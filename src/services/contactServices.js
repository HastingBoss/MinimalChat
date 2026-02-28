import { contacts, channels } from '../data/contactData'

/**
 * Obtiene la lista completa de contactos (Mensajes Directos)
 * @returns {Array} Array de objetos de contacto
 */
export function getContacts() {
    return contacts
}

/**
 * Obtiene la lista completa de canales de comunicación
 * @returns {Array} Array de objetos de canal
 */
export function getChannels() {
    return channels
}

