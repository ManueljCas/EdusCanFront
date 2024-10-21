// Components/Alumno/HomeStudent.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/Alumno/HomeStudent.css';
import BottomNav from '../Nav/BottomNav';

const HomeStudent: React.FC = () => {
  return (
    <><div className="home-student">
          <header className="home-student-header">
              <h2 className="home-student-title">UT-Cancun</h2>
              <div className="home-student-info">
                  <img
                      src="https://media.istockphoto.com/id/1309328823/es/foto/retrato-a-la-cabeza-de-un-empleado-masculino-sonriente-en-la-oficina.jpg?s=612x612&w=0&k=20&c=dHyuXtXkuaHfJN4t205t_Xt1mKRxa8LY2ViVQi837f0=" // Ejemplo de URL de imagen
                      alt="Foto de perfil"
                      className="home-student-pic" />
                  <div className="home-student-details">
                      <h3 className="home-student-name">Alejandro Martinez</h3>
                      <p className="home-student-email">19393094@utcancun.edu.mx</p>
                  </div>
              </div>
          </header>

          <div className="home-student-welcome">
              <h1 className="home-student-greeting">Hola, Alejandro.</h1>
              <p className="home-student-subtitle">Bienvenido a tus clases</p>
          </div>

          <nav className="home-student-sections">
              <Link to="/clases-hoy" className="home-student-link">
                  Clases Hoy <span className="home-student-icon">▶</span>
              </Link>
              <Link to="/attendance-report" className="home-student-link">
                  Reporte de asistencia <span className="home-student-icon">▶</span>
              </Link>
              <Link to="/otros" className="home-student-link">
                  Otros <span className="home-student-icon">▶</span>
              </Link>
          </nav>
      </div><BottomNav /></>
  );
   
};

export default HomeStudent;
