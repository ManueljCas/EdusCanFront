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
        const gruposGuardados = localStorage.getItem('grupos');
        const gruposParsed: Grupo[] = gruposGuardados ? JSON.parse(gruposGuardados) : [];
        setGrupos(gruposParsed);
    }, []);

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
        event.stopPropagation();
        setMenuActivo(menuActivo === id ? null : id);
    };

    const handleNavigate = (path: string) => {
        navigate(path);
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

    return (
        <div className="home-container-unique">
            <h1 className="home-title-unique">Grupos</h1>
            {grupos.length === 0 ? (
                <div>
                <p className="no-groups-text-unique">
                  En este momento no se ha creado ningún grupo.
                </p>
                <button 
                  className="add-group-button"
                  onClick={() => navigate('/creategroup')}
                >
                  Agrega un Grupo
                </button>
              </div>
              
                
            ) : (
                <div className="grupos-container-unique">
                    {Object.entries(categorias).map(([categoria, grupos]) => (
                        grupos.length > 0 && (
                            <div key={categoria}>
                                <h2 className="category-title-unique">{categoria}</h2>
                                <div className="grupos-grid-unique">
                                    {grupos.map((grupo) => (
                                        <div key={grupo.id} className="grupo-card-unique">
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
                                                >
                                                    <div className="menu-item-unique" onClick={() => handleNavigate('/alumnos')}>
                                                        Alumnos
                                                    </div>
                                                    <div className="menu-item-unique" onClick={() => handleNavigate('/edit')}>
                                                        Editar
                                                    </div>
                                                    <div className="menu-item-unique" onClick={() => eliminarGrupo(grupo.id)}>
                                                        Eliminar
                                                    </div>
                                                </div>
                                            )}
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
