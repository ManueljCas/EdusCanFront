import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import '../../Css/EditProfile.css';
import BottomNav from '../Nav/BottomNav';
import PerfilNuevo from '../../Img/PerfilNuevo.png';

function EditProfile() {
    const [phone, setPhone] = useState('');

    return (
        <div className="edit-profile-container">
            <h1 className="edit-profile-title">Editar perfil</h1>
            <div className="edit-profile-avatar">
                <img
                    src={PerfilNuevo}
                    alt="Avatar"
                    className="edit-profile-avatar-image"
                />
            </div>
            <form className="edit-profile-form">
                <div className="edit-profile-group">
                    <input
                        type="text"
                        required
                        className="edit-profile-input"
                        placeholder=" "
                    />
                    <label className="edit-profile-label">Nombre Completo</label>
                </div>

                <div className="edit-profile-group">
                    <input
                        type="text"
                        required
                        className="edit-profile-input"
                        placeholder=" "
                    />
                    <label className="edit-profile-label">Instituto</label>
                </div>

                <div className="edit-profile-group">
                    <input
                        type="email"
                        required
                        className="edit-profile-input"
                        placeholder=" "
                    />
                    <label className="edit-profile-label">Correo</label>
                </div>

                <div className="edit-profile-group">
                    <div className="edit-profile-phone-input-container">
                        <PhoneInput
                            country={'mx'}
                            value={phone}
                            onChange={setPhone}
                            inputClass="edit-profile-phone-input"
                        />
                    </div>
                </div>

                <div className="edit-profile-row">
                    <div className="edit-profile-group edit-profile-half">
                        <input
                            type="date"
                            required
                            className="edit-profile-input"
                        />
                        <label className="edit-profile-label">Fecha de Nacimiento</label>
                    </div>

                    <div className="edit-profile-group edit-profile-half">
                        <select required className="edit-profile-input">
                            <option value="">Selecciona género</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                        <label className="edit-profile-label">Género</label>
                    </div>
                </div>

                <button type="button" className="edit-profile-button edit-profile-save">
                    Guardar cambios
                </button>
                <button type="button" className="edit-profile-button edit-profile-cancel">
                    Cancelar
                </button>
            </form>
            <BottomNav />
        </div>
    );
}

export default EditProfile;
