import React from 'react';
import '../../Css/Register.css';

function Register() {
    return (
        <div className="register-page-unique">
            <form className="register-form-unique" autoComplete="off">
                <h1 className="register-title-unique">Crea una cuenta</h1>

                <div className="register-group-unique">
                    <input
                        type="text"
                        className="register-input-unique"
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label className="register-label-unique">Nombre Completo</label>
                </div>

                <div className="register-group-unique">
                    <input
                        type="email"
                        className="register-input-unique"
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label className="register-label-unique">Correo Electrónico</label>
                </div>

                <div className="register-group-unique">
                    <input
                        type="password"
                        className="register-input-unique"
                        placeholder=" "
                        autoComplete="new-password"
                    />
                    <label className="register-label-unique">Contraseña</label>
                </div>

                <div className="register-group-unique">
                    <input
                        type="password"
                        className="register-input-unique"
                        placeholder=" "
                        autoComplete="new-password"
                    />
                    <label className="register-label-unique">Confirma tu Contraseña</label>
                </div>
                
                <select className="register-select-unique">
                    <option value="">Seleccione su rol</option>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                </select>

                <button type="submit" className="register-button-unique">Registrarse</button>

                <div className="divider-unique">O</div>

                <button className="btn-google-unique">
                    <img
                        src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                        alt="Google logo"
                    />
                    Registrarse con Google
                </button>

                <p className="login-link-unique">
                    ¿Ya tienes una cuenta? <a href="/" className="login-link-anchor">Inicia Sesión</a>
                </p>
            </form>
        </div>
    );
}

export default Register;
