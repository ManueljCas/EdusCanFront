import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/CreateGroup.css';

function CreateGroup() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [materia, setMateria] = useState('');
    const [grado, setGrado] = useState('Matutino'); // Valor por defecto
    const [dias, setDias] = useState('');
    const [duracion, setDuracion] = useState('');

    const crearGrupo = () => {
        const nuevoGrupo = { nombre, materia, grado, dias, duracion };
        const gruposGuardados = JSON.parse(localStorage.getItem('grupos') || '[]');
        gruposGuardados.push(nuevoGrupo);
        localStorage.setItem('grupos', JSON.stringify(gruposGuardados));
        navigate('/home'); // Redirigir al home después de crear el grupo
    };

    return (
        <div className="create-group-container">
            <h1 className="create-group-title">Agregar un grupo</h1>
            <form className="create-group-form" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Nombre del Grupo"
                    className="create-group-input"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Materia"
                    className="create-group-input"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                />

                {/* Nuevo Select para Grado */}
                <select 
                    className="create-group-select"
                    value={grado} 
                    onChange={(e) => setGrado(e.target.value)}
                >
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                </select>

                <input
                    type="text"
                    placeholder="Días de la Semana"
                    className="create-group-input"
                    value={dias}
                    onChange={(e) => setDias(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Duración de las Sesiones"
                    className="create-group-input"
                    value={duracion}
                    onChange={(e) => setDuracion(e.target.value)}
                />
                <button
                    type="button"
                    className="create-group-button create-button-blue"
                    onClick={crearGrupo}
                >
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
