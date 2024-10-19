import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/CreateGroup.css';

function CreateGroup() {
    const navigate = useNavigate();

    return (
        <div className="create-group-container">
            <h1 className="create-group-title">Agregar un grupo</h1>
            <form className="create-group-form">
                <input
                    type="text"
                    placeholder="Nombre del Grupo"
                    className="create-group-input"
                />
                <input
                    type="text"
                    placeholder="Materia"
                    className="create-group-input"
                />
                <input
                    type="number"
                    placeholder="Cuatrimestre/Semestre/Grado"
                    className="create-group-input"
                />
                <div className="create-group-row">
                    <input
                        type="text"
                        placeholder="Días de la Semana"
                        className="create-group-input-row"
                    />
                    <input
                        type="text"
                        placeholder="Duración de las Sesiones"
                        className="create-group-input-row"
                    />
                </div>
                <button type="button" className="create-group-button create-button-blue">
                    CREAR
                </button>
                <button 
                    type="button" 
                    className="create-group-button create-button-red"
                    onClick={() => navigate('/home')}
                >
                    CANCELAR
                </button>
            </form>
        </div>
    );
}

export default CreateGroup;
