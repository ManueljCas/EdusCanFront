import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Css/CreateGroup.css';

function CreateGroup() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [materia, setMateria] = useState('');
    const [turno, setTurno] = useState('Matutino');
    const [dias, setDias] = useState('');
    const [duracion, setDuracion] = useState('');

    const generateId = () => Date.now().toString();

    const crearGrupo = () => {
        const nuevoGrupo = {
            id: generateId(),
            nombre,
            materia,
            turno,
            dias,
            duracion,
        };
        const gruposGuardados = JSON.parse(localStorage.getItem('grupos') || '[]');
        gruposGuardados.push(nuevoGrupo);
        localStorage.setItem('grupos', JSON.stringify(gruposGuardados));
        navigate('/home');
    };

    return (
        <div className="create-group-container">
            <h1 className="create-group-title">Agregar un grupo</h1>
            <form className="create-group-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                    <input
                        type="text"
                        className="input"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder=" "
                    />
                    <label className="label">Nombre del Grupo</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="input"
                        value={materia}
                        onChange={(e) => setMateria(e.target.value)}
                        placeholder=" "
                    />
                    <label className="label">Materia</label>
                </div>

                <div className="input-group">
                    <select
                        className="input"
                        value={turno}
                        onChange={(e) => setTurno(e.target.value)}
                    >
                        <option value="Matutino">Matutino</option>
                        <option value="Vespertino">Vespertino</option>
                    </select>
                    <label className="label">Turno</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="input"
                        value={dias}
                        onChange={(e) => setDias(e.target.value)}
                        placeholder=" "
                    />
                    <label className="label">Días de la Semana</label>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="input"
                        value={duracion}
                        onChange={(e) => setDuracion(e.target.value)}
                        placeholder=" "
                    />
                    <label className="label">Duración de las Sesiones</label>
                </div>

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
