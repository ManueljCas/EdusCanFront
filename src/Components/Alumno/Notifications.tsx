// Components/Alumno/Notifications.tsx
import React from 'react';
import '../../Css/Alumno/Notifications.css';
import BottomNav from '../Nav/BottomNav';
import { Link } from 'react-router-dom';

const Notifications: React.FC = () => {
  return (
    <>
      <div className="notifications-container">
        <header className="notifications-header">
          <button className="back-button">←</button>
          <h1 className="notifications-title">Asistencia</h1>
          <div className="student-info">
            <img
              src="https://media.istockphoto.com/id/1309328823/es/foto/retrato-a-la-cabeza-de-un-empleado-masculino-sonriente-en-la-oficina.jpg?s=612x612&w=0&k=20&c=dHyuXtXkuaHfJN4t205t_Xt1mKRxa8LY2ViVQi837f0="
              alt="Foto de perfil"
              className="student-pic"
            />
            <div className="student-details">
              <h3 className="student-name">Alejandro Martinez</h3>
              <p className="student-email">19393094@utcancun.edu.mx</p>
            </div>
          </div>
        </header>

        <section className="classes-today">
          <h2 className="section-title">Clases de Hoy</h2>
          
          {/* Cada tarjeta de clase está envuelta en un Link */}
          <Link to="/attendance-report" className="class-card-link">
            <div className="class-card present">
              <div className="class-icon present-icon">A</div>
              <div className="class-details">
                <h3 className="class-name">APM</h3>
                <p className="class-status">Usted está marcado presente</p>
              </div>
              <div className="class-time">09:30 am</div>
            </div>
          </Link>

          <Link to="/attendance-report" className="class-card-link">
            <div className="class-card absent">
              <div className="class-icon absent-icon">A</div>
              <div className="class-details">
                <h3 className="class-name">APM</h3>
                <p className="class-status">Usted está marcado ausente</p>
              </div>
              <div className="class-time">11:00 am</div>
            </div>
          </Link>

          <Link to="/attendance-report" className="class-card-link">
            <div className="class-card present">
              <div className="class-icon present-icon">A</div>
              <div className="class-details">
                <h3 className="class-name">APM</h3>
                <p className="class-status">Usted está marcado presente</p>
              </div>
              <div className="class-time">12:30 pm</div>
            </div>
          </Link>

          <Link to="/attendance-report" className="class-card-link">
            <div className="class-card absent">
              <div className="class-icon absent-icon">A</div>
              <div className="class-details">
                <h3 className="class-name">APM</h3>
                <p className="class-status">Usted está marcado ausente</p>
              </div>
              <div className="class-time">02:00 pm</div>
            </div>
          </Link>
        </section>
        
      </div>
      <BottomNav />
    </>
  );
};

export default Notifications;
