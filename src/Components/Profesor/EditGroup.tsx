import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grupo } from '../../Interfaces/Group'; // Importamos la interfaz
import '../../Css/CreateGroup.css';

function EditGroup() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState<string>('');
    const [materia, setMateria] = useState<string>('');
    const [turno, setTurno] = useState<string>('Matutino');
    const [dias, setDias] = useState<string>('');
    const [duracion, setDuracion] = useState<string>('');

    useEffect(() => {
        const grupos: Grupo[] = JSON.parse(localStorage.getItem('grupos') || '[]');
        const grupo = grupos.find((g) => g.id === id);

        if (grupo) {
            setNombre(grupo.nombre);
            setMateria(grupo.materia);
            setTurno(grupo.turno);
            setDias(grupo.dias);
            setDuracion(grupo.duracion);
        }
    }, [id]);

    const actualizarGrupo = () => {
        const confirmacion = window.confirm('¿Estás seguro de guardar los cambios?');
        if (confirmacion) {
            const grupos: Grupo[] = JSON.parse(localStorage.getItem('grupos') || '[]');
            const gruposActualizados = grupos.map((g) =>
                g.id === id ? { ...g, nombre, materia, turno, dias, duracion } : g
            );
            localStorage.setItem('grupos', JSON.stringify(gruposActualizados));
            navigate('/home');
        }
    };

    return (
        <div className="create-group-container">
            <h1 className="create-group-title">Editar Grupo</h1>
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
                    onClick={actualizarGrupo}
                >
                    GUARDAR CAMBIOS
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

export default EditGroup;
