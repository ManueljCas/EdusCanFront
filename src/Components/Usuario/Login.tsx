import React from 'react';
import '../../Css/Login.css';
import LogoGoogle from  '../../Img/LogoGoogle.png';

function Login() {
    return (
        <div className="login-page">
            <form className="login-form" autoComplete="off">
                <h1 className="login-title">Iniciar Sesión</h1>

                <div className="login-group">
                    <input
                        type="email"
                        className="login-input"
                        name="login-email"
                        autoComplete="new-email"
                        placeholder=" "
                    />
                    <label className="login-label">Correo</label>
                </div>

                <div className="login-group">
                    <input
                        type="password"
                        className="login-input"
                        name="login-password"
                        autoComplete="new-password"
                        placeholder=" "
                    />
                    <label className="login-label">Contraseña</label>
                </div>

                <div className="options-container">
                    <div className="remember-me-container">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className="remember-label">Recuérdame</label>
                    </div>
                    <span className="forgot-password">¿Olvidaste tu contraseña?</span>
                </div>

                <button type="button" className="login-button">
                    Iniciar Sesión
                </button>

                <div className="divider">O</div>

                <div className="google-button">
                    <img
                        src={LogoGoogle}
                        alt="Google Logo"
                    />
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
