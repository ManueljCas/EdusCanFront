import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Css/BottomNav.css'; // Asegúrate de que la ruta sea correcta.
import { FiHome, FiBell, FiUser, FiLogOut } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';

function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation(); // Para obtener la ruta actual

    // Función para cerrar sesión
    const cerrarSesion = () => {
        localStorage.removeItem('session'); // Elimina la sesión guardada
        navigate('/'); // Redirige al login
    };

    return (
        <div className="withBottomNav">
            <div className="bottom-nav-container">
                {/* Íconos del lado izquierdo */}
                <button onClick={() => navigate('/home')} className="bottom-nav-button home-button">
                    <FiHome size={28} />
                </button>
                <button onClick={() => navigate('/notifications')} className="bottom-nav-button button-up1">
                    <FiBell size={28} />
                </button>

                {/* Botón de agregar (solo en /home) */}
                {location.pathname === '/home' && (
                    <div
                        className="bottom-nav-add-button"
                        onClick={() => navigate('/creategroup')}
                    >
                        <MdAdd size={36} />
                    </div>
                )}

                {/* Íconos del lado derecho */}
                <button
                    onClick={() => navigate('/editprofile')}
                    className="bottom-nav-button profile-button button-up2"
                >
                    <FiUser size={28} />
                </button>
                <button onClick={cerrarSesion} className="bottom-nav-button">
                    <FiLogOut size={28} />
                </button>
            </div>
        </div>
    );
}

export default BottomNav;
