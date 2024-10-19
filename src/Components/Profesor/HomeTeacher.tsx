import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import BottomNav from '../Nav/BottomNav';
import { Grupo } from '../../Interfaces/Group';
import '../../Css/Home.css';

function HomeTeacher() {
    const [grupos, setGrupos] = useState<Grupo[]>([]);
    const [menuActivo, setMenuActivo] = useState<number | null>(null);
    const menuRefs = useRef<Array<HTMLDivElement | null>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const gruposGuardados = localStorage.getItem('grupos');
        const gruposParsed: Grupo[] = gruposGuardados ? JSON.parse(gruposGuardados) : [];
        setGrupos(gruposParsed);
    }, []);

    const categorias = {
        Matutino: grupos.filter((grupo) => grupo.grado === 'Matutino'),
        Vespertino: grupos.filter((grupo) => grupo.grado === 'Vespertino'),
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuActivo !== null &&
                menuRefs.current[menuActivo] &&
                !menuRefs.current[menuActivo]?.contains(event.target as Node)
            ) {
                setMenuActivo(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuActivo]);

    const toggleMenu = (index: number) => {
        setMenuActivo(menuActivo === index ? null : index);
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        setMenuActivo(null);
    };

    const eliminarGrupo = (index: number) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <div className="react-confirm-alert">
                    <h1>Confirmar eliminación</h1>
                    <p>¿Estás seguro de que quieres eliminar este grupo?</p>
                    <div className="react-confirm-alert-button-group">
                        <button
                            className="btn-confirmar"
                            onClick={() => {
                                const nuevosGrupos = grupos.filter((_, i) => i !== index);
                                setGrupos(nuevosGrupos);
                                localStorage.setItem('grupos', JSON.stringify(nuevosGrupos));
                                onClose(); // Cerrar el modal
                                setMenuActivo(null); // Cerrar menú desplegable
                            }}
                        >
                            Sí
                        </button>
                        <button
                            className="btn-cancelar"
                            onClick={() => {
                                onClose(); // Cerrar el modal
                                setMenuActivo(null); // Cerrar menú desplegable
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            ),
        });
    };

    return (
        <div className="home-container-unique">
            <h1 className="home-title-unique">Grupos</h1>
            {grupos.length === 0 ? (
                <p className="no-groups-text-unique">
                    En este momento no se ha creado ningún grupo, es una lástima...
                </p>
            ) : (
                <div className="grupos-container-unique">
                    {Object.entries(categorias).map(([categoria, grupos]) => (
                        grupos.length > 0 && (
                            <div key={categoria}>
                                <h2 className="category-title-unique">{categoria}</h2>
                                <div className="grupos-grid-unique">
                                    {grupos.map((grupo, index) => (
                                        <div key={index} className="grupo-card-unique">
                                            <span className="grupo-nombre-unique">{grupo.nombre}</span>
                                            <span
                                                className="menu-icon-unique"
                                                onClick={() => toggleMenu(index)}
                                            >
                                                ⋮
                                            </span>
                                            <div
                                                className={`menu-desplegable-unique ${
                                                    menuActivo === index ? 'active' : ''
                                                }`}
                                                ref={(el) => (menuRefs.current[index] = el)}
                                            >
                                                <div
                                                    className="menu-item-unique"
                                                    onClick={() => handleNavigate('/alumnos')}
                                                >
                                                    Alumnos
                                                </div>
                                                <div
                                                    className="menu-item-unique"
                                                    onClick={() => handleNavigate('/edit')}
                                                >
                                                    Editar
                                                </div>
                                                <div
                                                    className="menu-item-unique"
                                                    onClick={() => eliminarGrupo(index)}
                                                >
                                                    Eliminar
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}
            <BottomNav />
        </div>
    );
}

export default HomeTeacher;
