import { Link } from 'react-router'
import './ErrorNotFoundScreen.css'

export default function ErrorNotFoundScreen() {
    return (
        <div className='chat-container error-container'>
            <h1>Error 404</h1>
            <p>Página no encontrada</p>
            <Link to='/' className='error-link'>Volver al inicio</Link>
        </div>
    )
}
