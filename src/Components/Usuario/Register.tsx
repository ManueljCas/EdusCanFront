import React from 'react';
import '../../Css/Register.css';

function Register() {
    return (
        <div className="register-page-unique">
            <form className="register-form-unique">
                <h1 className="register-title-unique">Crea una cuenta</h1>
                <input 
                    type="text" 
                    placeholder="Ingresa tu nombre completo" 
                    className="register-input-unique" 
                />
                <input 
                    type="email" 
                    placeholder="Ingresa tu correo electrónico" 
                    className="register-input-unique" 
                />
                <input 
                    type="password" 
                    placeholder="Ingresa tu contraseña" 
                    className="register-input-unique" 
                />
                <input 
                    type="password" 
                    placeholder="Confirma tu contraseña" 
                    className="register-input-unique" 
                />
                <select className="register-select-unique">
                    <option value="">Seleccione su rol</option>
                    <option value="admin">Admin</option>
                    <option value="user">Usuario</option>
                </select>

                <button type="submit" className="register-button-unique">Sign Up</button>

                <div className="divider-unique">
                    <span>Or With</span>
                </div>

                <button className="btn-google-unique">
                    <img 
                        src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" 
                        alt="Google logo" 
                    />
                    Signup with Google
                </button>

                <p className="login-link-unique">
                    Already have an account? <a href="/" className="login-link-anchor">Login</a>
                </p>
            </form>
        </div>
    );
}

export default Register;
