import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import BottomNav from '../Nav/BottomNav';
import { Grupo } from '../../Interfaces/Group';
import '../../Css/Home.css';

function HomeTeacher() {
    const [grupos, setGrupos] = useState<Grupo[]>([]);
    const [menuActivo, setMenuActivo] = useState<string | null>(null);
    const menuRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo') || 'null');
        if (!usuarioActivo) {
            alert('No se encontró el usuario activo.');
            navigate('/');
            return;
        }

        const gruposGuardados: Grupo[] = JSON.parse(localStorage.getItem('grupos') || '[]');
        const gruposDelUsuario = gruposGuardados.filter(
            (grupo) => grupo.creador === usuarioActivo.correo
        );

        setGrupos(gruposDelUsuario);
    }, [navigate]);

    const categorias = {
        Matutino: grupos.filter((grupo) => grupo.turno === 'Matutino'),
        Vespertino: grupos.filter((grupo) => grupo.turno === 'Vespertino'),
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuActivo !== null &&
            menuRefs.current[menuActivo] &&
            !menuRefs.current[menuActivo]?.contains(event.target as Node)
        ) {
            setMenuActivo(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuActivo]);

    const toggleMenu = (id: string, event: React.MouseEvent) => {
        event.stopPropagation(); // Evita la propagación hacia la tarjeta
        setMenuActivo(menuActivo === id ? null : id);
    };

    const handleNavigate = (path: string) => {
        navigate(path); // No se necesita `event` aquí
        setMenuActivo(null);
    };

    const eliminarGrupo = (id: string) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <div>
                    <h1>Confirmar eliminación</h1>
                    <p>¿Estás seguro de que quieres eliminar este grupo?</p>
                    <div className="react-confirm-alert-button-group">
                        <button
                            className="btn-confirmar"
                            onClick={() => {
                                const nuevosGrupos = grupos.filter((grupo) => grupo.id !== id);
                                setGrupos(nuevosGrupos);
                                localStorage.setItem('grupos', JSON.stringify(nuevosGrupos));
                                onClose();
                                setMenuActivo(null);
                            }}
                        >
                            Sí
                        </button>
                        <button
                            className="btn-cancelar"
                            onClick={() => {
                                onClose();
                                setMenuActivo(null);
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            ),
        });
    };

    const goToCalendario = (id: string, event: React.MouseEvent) => {
        if (!menuActivo) {
            event.stopPropagation(); // Asegura que el clic no se propague al menú
            navigate(`/calendar/${id}`);
        }
    };

    return (
        <div className="home-container-unique">
            <h1 className="home-title-unique">Grupos</h1>
            {grupos.length === 0 ? (
                <div>
                    <p className="no-groups-text-unique">No tienes grupos creados.</p>
                    <button
                        className="add-group-button"
                        onClick={() => navigate('/creategroup')}
                    >
                        Crear un Grupo
                    </button>
                </div>
            ) : (
                <div className="grupos-container-unique">
                    {Object.entries(categorias).map(([categoria, grupos]) =>
                        grupos.length > 0 && (
                            <div key={categoria}>
                                <h2 className="category-title-unique">{categoria}</h2>
                                <div className="grupos-grid-unique">
                                    {grupos.map((grupo) => (
                                        <div
                                            key={grupo.id}
                                            className="grupo-card-unique"
                                            onClick={(event) => goToCalendario(grupo.id, event)}
                                        >
                                            <span className="grupo-nombre-unique">{grupo.nombre}</span>
                                            <span
                                                className="menu-icon-unique"
                                                onClick={(event) => toggleMenu(grupo.id, event)}
                                            >
                                                ⋮
                                            </span>
                                            {menuActivo === grupo.id && (
                                                <div
                                                    className="menu-desplegable-unique active"
                                                    ref={(el) => (menuRefs.current[grupo.id] = el)}
                                                    onClick={(event) => event.stopPropagation()}
                                                >
                                                    <div
                                                        className="menu-item-unique"
                                                        onClick={() => handleNavigate(`/add-students/${grupo.id}`)}
                                                    >
                                                        Alumnos
                                                    </div>
                                                    <div
                                                        className="menu-item-unique"
                                                        onClick={() => handleNavigate(`/edit-group/${grupo.id}`)}
                                                    >
                                                        Editar
                                                    </div>
                                                    <div
                                                        className="menu-item-unique"
                                                        onClick={() => eliminarGrupo(grupo.id)}
                                                    >
                                                        Eliminar
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            )}
            <BottomNav />
        </div>
    );
}

export default HomeTeacher;
