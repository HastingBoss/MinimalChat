import { Link } from 'react-router'

export default function ErrorNotFoundScreen() {
    return (
        <div className='chat-container' style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Error 404</h1>
            <p>Página no encontrada</p>
            <Link to='/' style={{ color: 'var(--text-color)', marginTop: '1rem' }}>Volver al inicio</Link>
        </div>
    )
}
