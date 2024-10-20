import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../Css/AddStudents.css';

const alumnosMock = [
    'Felipe Calderon',
    'Marco Antonio',
    'Ana María López',
    'José Hernández',
    'María Fernanda',
    'Luis Pérez',
    'Carlos González',
    'Sofía Ramírez',
    'Jorge Campos',
    'Valeria Martínez',
    'Daniela Fernández'
]; // Alumnos de ejemplo

function AddStudents() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [grupoNombre, setGrupoNombre] = useState('');
    const [search, setSearch] = useState('');
    const [filteredAlumnos, setFilteredAlumnos] = useState<string[]>([]);
    const [alumnosSeleccionados, setAlumnosSeleccionados] = useState<string[]>([]);

    // Cargar grupo correspondiente al iniciar
    useEffect(() => {
        const grupos = JSON.parse(localStorage.getItem('grupos') || '[]');
        const grupo = grupos.find((g: { id: string }) => g.id === id);
        if (grupo) setGrupoNombre(grupo.nombre);

        // Cargar alumnos seleccionados si ya existen en el grupo
        if (grupo && grupo.alumnos) {
            setAlumnosSeleccionados(grupo.alumnos);
        }
    }, [id]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        const filtered = value
            ? alumnosMock.filter((alumno) =>
                alumno.toLowerCase().includes(value.toLowerCase())
            )
            : [];
        setFilteredAlumnos(filtered);
    };

    const handleAddAlumno = (alumno: string) => {
        if (!alumnosSeleccionados.includes(alumno)) {
            setAlumnosSeleccionados([...alumnosSeleccionados, alumno]);
        }
        setSearch('');
        setFilteredAlumnos([]);
    };

    const handleRemoveAlumno = (alumno: string) => {
        setAlumnosSeleccionados(alumnosSeleccionados.filter((a) => a !== alumno));
    };

    const handleConfirm = () => {
        // Guardar los alumnos seleccionados en el grupo correspondiente en localStorage
        const grupos = JSON.parse(localStorage.getItem('grupos') || '[]');
        const updatedGrupos = grupos.map((g: { id: string; alumnos: string[] }) =>
            g.id === id ? { ...g, alumnos: alumnosSeleccionados } : g
        );
        localStorage.setItem('grupos', JSON.stringify(updatedGrupos));

        navigate('/home'); // Redirigir a la página principal
    };

    return (
        <div className="add-students-container">
            <h1 className="add-students-title">Agregar Alumnos</h1>

            <div className="input-group">
                <input
                    type="text"
                    value={grupoNombre}
                    readOnly
                    className="add-students-input"
                    placeholder=" "
                />
                <label className="add-students-label">Nombre del Grupo</label>
            </div>

            <div className="input-group">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    className="add-students-input"
                    placeholder=" "
                />
                <label className="add-students-label">Buscar Alumnos</label>

                {/* Resultados de búsqueda como overlay */}
                {search && (
                    <div className="search-overlay">
                        {filteredAlumnos.length > 0 ? (
                            filteredAlumnos.map((alumno) => (
                                <div
                                    key={alumno}
                                    className={`search-result-item ${
                                        alumnosSeleccionados.includes(alumno) ? 'selected' : ''
                                    }`}
                                    onClick={() => handleAddAlumno(alumno)}
                                >
                                    {alumno}
                                    {alumnosSeleccionados.includes(alumno) && (
                                        <span className="selected-tag">Seleccionado</span>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="no-alumnos-text">No hay alumnos disponibles</p>
                        )}
                    </div>
                )}
            </div>

            <div className="alumnos-seleccionados">
                {alumnosSeleccionados.length > 0 ? (
                    alumnosSeleccionados.map((alumno) => (
                        <div key={alumno} className="alumno-item">
                            {alumno}
                            <button
                                className="remove-alumno-button"
                                onClick={() => handleRemoveAlumno(alumno)}
                            >
                                ❌
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-seleccionados-text">No hay alumnos seleccionados</p>
                )}
            </div>

            <button className="add-students-button confirm" onClick={handleConfirm}>
                CONFIRMAR
            </button>
            <button className="add-students-button cancel" onClick={() => navigate('/home')}>
                CANCELAR
            </button>
        </div>
    );
}

export default AddStudents;
