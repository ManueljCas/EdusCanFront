import React, { useState } from 'react';
import { Usuario } from '../../Interfaces/User'; // Importamos la interfaz
import { useNavigate } from 'react-router-dom';
import '../../Css/Register.css';

function Register() {
    const navigate = useNavigate();
    const [nombreCompleto, setNombreCompleto] = useState<string>('');
    const [correo, setCorreo] = useState<string>('');
    const [contraseña, setContraseña] = useState<string>('');
    const [confirmarContraseña, setConfirmarContraseña] = useState<string>('');
    const [rol, setRol] = useState<string>('');

    const registrarUsuario = () => {
        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        const nuevoUsuario: Usuario = { nombreCompleto, correo, contraseña, rol };
        const usuariosGuardados: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
        alert('Usuario registrado exitosamente.');
        navigate('/'); // Redirigir al login después del registro
    };

    return (
        <div className="register-page-unique">
            <form className="register-form-unique" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <h1 className="register-title-unique">Crea una cuenta</h1>

                <div className="register-group-unique">
                    <input
                        type="text"
                        className="register-input-unique"
                        value={nombreCompleto}
                        onChange={(e) => setNombreCompleto(e.target.value)}
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label className="register-label-unique">Nombre Completo</label>
                </div>

                <div className="register-group-unique">
                    <input
                        type="email"
                        className="register-input-unique"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder=" "
                        autoComplete="off"
                    />
                    <label className="register-label-unique">Correo Electrónico</label>
                </div>

                <div className="register-group-unique">
                    <input
                        type="password"
                        className="register-input-unique"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder=" "
                        autoComplete="new-password"
                    />
                    <label className="register-label-unique">Contraseña</label>
                </div>

                <div className="register-group-unique">
                    <input
                        type="password"
                        className="register-input-unique"
                        value={confirmarContraseña}
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        placeholder=" "
                        autoComplete="new-password"
                    />
                    <label className="register-label-unique">Confirma tu Contraseña</label>
                </div>

                <div className="register-group-unique">
                    <select
                        className="register-select-unique"
                        value={rol}
                        onChange={(e) => setRol(e.target.value)}
                    >
                        <option value="">Seleccione su rol</option>
                        <option value="Teacher">Profesor</option>
                        <option value="student">Alumno</option>
                    </select>
                    <label className="register-label-unique">Rol</label>
                </div>

                <button type="button" className="register-button-unique" onClick={registrarUsuario}>
                    Registrarse
                </button>

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
