import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/Login.css';
import LogoGoogle from '../../Img/LogoGoogle.png';

function Login() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState<string>('');
    const [contraseña, setContraseña] = useState<string>('');
    const [recordar, setRecordar] = useState<boolean>(false);

    // Verifica si hay un usuario activo al cargar el componente
    useEffect(() => {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || 'null');
        const session = JSON.parse(localStorage.getItem('session') || 'null');

        if (usuarioActivo && session) {
            const now = new Date().getTime();
            const sessionTime = new Date(session.timestamp).getTime();
            const diff = now - sessionTime;

            if (diff <= 24 * 60 * 60 * 1000) {
                alert('Inicio de sesión automático.');
                navigate('/home'); // Redirigir automáticamente si la sesión es válida
            } else {
                localStorage.removeItem('session'); // Eliminar sesión caducada
                localStorage.removeItem('usuarioActivo');
            }
        }
    }, [navigate]);

    const iniciarSesion = () => {
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuarioEncontrado = usuariosGuardados.find(
            (usuario: { correo: string; contraseña: string }) =>
                usuario.correo === correo && usuario.contraseña === contraseña
        );

        if (usuarioEncontrado) {
            const session = {
                correo: usuarioEncontrado.correo,
                timestamp: new Date().toISOString(),
            };

            localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
            localStorage.setItem('session', JSON.stringify(session));

            alert('Inicio de sesión exitoso.');
            navigate('/home');
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-page">
            <form className="login-form" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <h1 className="login-title">Iniciar Sesión</h1>

                <div className="login-group">
                    <input
                        type="email"
                        className="login-input"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder=" "
                        autoComplete="new-email"
                    />
                    <label className="login-label">Correo</label>
                </div>

                <div className="login-group">
                    <input
                        type="password"
                        className="login-input"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder=" "
                        autoComplete="new-password"
                    />
                    <label className="login-label">Contraseña</label>
                </div>

                <div className="options-container">
                    <div className="remember-me-container">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={recordar}
                            onChange={(e) => setRecordar(e.target.checked)}
                        />
                        <label htmlFor="remember" className="remember-label">
                            Recuérdame
                        </label>
                    </div>
                    <span className="forgot-password">¿Olvidaste tu contraseña?</span>
                </div>

                <button type="button" className="login-button" onClick={iniciarSesion}>
                    Iniciar Sesión
                </button>

                <div className="divider">O</div>

                <div className="google-button">
                    <img src={LogoGoogle} alt="Google Logo" />
                    Inicia sesión con Google
                </div>

                <div className="signup-link">
                    ¿No tienes una cuenta? <a href="/register" className="signup-anchor">Regístrate</a>
                </div>
            </form>
        </div>
    );
}

export default Login;
