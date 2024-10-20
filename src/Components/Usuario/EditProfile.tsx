import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import '../../Css/EditProfile.css';
import BottomNav from '../Nav/BottomNav';
import PerfilNuevo from '../../Img/PerfilNuevo.png';
import { UsuarioActivo } from '../../Interfaces/UsuarioActivo'; // Importar la nueva interfaz

function EditProfile() {
    const navigate = useNavigate();
    const [perfil, setPerfil] = useState<UsuarioActivo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Cargar los datos del usuario activo al montar el componente
    useEffect(() => {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || 'null');
        if (usuarioActivo) {
            setPerfil(usuarioActivo);
        } else {
            alert('No hay un usuario activo.');
            navigate('/'); // Redirigir al login si no hay usuario
        }
        setLoading(false);
    }, [navigate]);

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (!perfil) return;

        const { name, value } = e.target;
        setPerfil((prevPerfil) =>
            prevPerfil ? { ...prevPerfil, [name]: value } : null
        );
    };

    // Manejar cambios en el número de teléfono
    const handlePhoneChange = (value: string) => {
        if (!perfil) return;
        setPerfil((prevPerfil) =>
            prevPerfil ? { ...prevPerfil, telefono: value } : null
        );
    };

    // Guardar cambios en el localStorage y navegar a home
    const guardarCambios = () => {
        if (perfil) {
            localStorage.setItem('usuarioActivo', JSON.stringify(perfil));
            alert('Perfil actualizado exitosamente.');
            navigate('/home');
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };

    const cancelarEdicion = () => {
        if (window.confirm('¿Estás seguro de cancelar los cambios?')) {
            navigate('/home');
        }
    };

    if (loading) return <p>Cargando...</p>;

    return (
        perfil && (
            <div className="edit-profile-container">
                <h1 className="edit-profile-title">Editar perfil</h1>
                <div className="edit-profile-avatar">
                    <img src={PerfilNuevo} alt="Avatar" className="edit-profile-avatar-image" />
                </div>
                <form className="edit-profile-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="edit-profile-group">
                        <input
                            type="text"
                            name="nombreCompleto"
                            value={perfil.nombreCompleto}
                            onChange={handleChange}
                            required
                            className="edit-profile-input"
                            placeholder=" "
                        />
                        <label className="edit-profile-label">Nombre Completo</label>
                    </div>

                    <div className="edit-profile-group">
                        <input
                            type="text"
                            name="instituto"
                            value={perfil.instituto}
                            onChange={handleChange}
                            required
                            className="edit-profile-input"
                            placeholder=" "
                        />
                        <label className="edit-profile-label">Instituto</label>
                    </div>

                    <div className="edit-profile-group">
                        <input
                            type="email"
                            name="correo"
                            value={perfil.correo}
                            onChange={handleChange}
                            required
                            className="edit-profile-input"
                            placeholder=" "
                        />
                        <label className="edit-profile-label">Correo</label>
                    </div>

                    <div className="edit-profile-group">
                        <PhoneInput
                            country={'mx'}
                            value={perfil.telefono}
                            onChange={handlePhoneChange}
                            inputClass="edit-profile-phone-input"
                        />
                    </div>

                    <div className="edit-profile-row">
                        <div className="edit-profile-group edit-profile-half">
                            <input
                                type="date"
                                name="fechaNacimiento"
                                value={perfil.fechaNacimiento}
                                onChange={handleChange}
                                required
                                className="edit-profile-input"
                            />
                            <label className="edit-profile-label">Fecha de Nacimiento</label>
                        </div>

                        <div className="edit-profile-group edit-profile-half">
                            <select
                                name="genero"
                                value={perfil.genero}
                                onChange={handleChange}
                                required
                                className="edit-profile-input"
                            >
                                <option value="">Selecciona género</option>
                                <option value="Hombre">Hombre</option>
                                <option value="Mujer">Mujer</option>
                            </select>
                            <label className="edit-profile-label">Género</label>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="edit-profile-button edit-profile-save"
                        onClick={guardarCambios}
                    >
                        Guardar cambios
                    </button>
                    <button
                        type="button"
                        className="edit-profile-button edit-profile-cancel"
                        onClick={cancelarEdicion}
                    >
                        Cancelar
                    </button>
                </form>
                <BottomNav />
            </div>
        )
    );
}

export default EditProfile;
