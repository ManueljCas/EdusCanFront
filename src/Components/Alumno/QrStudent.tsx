// Components/Alumno/QrStudent.tsx
import React from 'react';
import '../../Css/Alumno/QrStudent.css';
import BottomNav from '../Nav/BottomNav';

const QrStudent: React.FC = () => {
  return (
    <><div className="qr-student-container">
          <h1 className="qr-student-title">Codigo Qr</h1>

          <div className="qr-student-info">
              <img
                  src="https://media.istockphoto.com/id/1309328823/es/foto/retrato-a-la-cabeza-de-un-empleado-masculino-sonriente-en-la-oficina.jpg?s=612x612&w=0&k=20&c=dHyuXtXkuaHfJN4t205t_Xt1mKRxa8LY2ViVQi837f0=" // Ejemplo de URL de imagen del perfil
                  alt="Foto de perfil"
                  className="qr-student-pic" />
              <div className="qr-student-details">
                  <h3 className="qr-student-name">Carlos Manuel Alejandro Martinez</h3>
                  <p className="qr-student-university">Universidad Tecnológico de Cancún</p>
              </div>
          </div>

          <div className="qr-code-container">
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png" // Ejemplo de URL de imagen del código QR
                  alt="Código QR"
                  className="qr-code" />
          </div>
      </div><BottomNav /></>
  );
};

export default QrStudent;
