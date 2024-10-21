// Components/Alumno/AttendanceReport.tsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Line,
  LineChart
} from 'recharts';
import '../../Css/Alumno/AttendanceReport.css';
import BottomNav from '../Nav/BottomNav';

const AttendanceReport: React.FC = () => {
  // Datos para las gráficas
  const barData = [
    { name: 'Lun', Asistencia: 80 },
    { name: 'Mar', Asistencia: 90 },
    { name: 'Mié', Asistencia: 75 },
    { name: 'Jue', Asistencia: 85 },
    { name: 'Vie', Asistencia: 88 },
  ];

  const pieData = [
    { name: 'Días Asistidos', value: 85 },
    { name: 'Días Ausentes', value: 15 },
  ];

  const COLORS = ['#4caf50', '#f44336']; // Colores para la gráfica circular

  return (
    <div className="attendance-report-container">
      <header className="attendance-report-header">
        <button className="back-button">←</button>
        <h1 className="attendance-report-title">Asistencia</h1>
        <div className="student-info">
          <img
            src="https://media.istockphoto.com/id/1309328823/es/foto/retrato-a-la-cabeza-de-un-empleado-masculino-sonriente-en-la-oficina.jpg?s=612x612&w=0&k=20&c=dHyuXtXkuaHfJN4t205t_Xt1mKRxa8LY2ViVQi837f0=" // Ejemplo de URL de imagen
            alt="Foto de perfil"
            className="student-pic"
          />
          <div className="student-details">
            <h3 className="student-name">Alejandro Martinez</h3>
            <p className="student-email">19393094@utcancun.edu.mx</p>
          </div>
          <span className="attendance-icon">⚖️</span>
        </div>
      </header>

      <section className="report-details">
        <h2 className="section-title">Reporte de asistencias</h2>
        <div className="class-summary">
          <div className="class-icon present-icon">A</div>
          <div className="class-info">
            <h3 className="class-name">Aplicaciones Móviles Integrales</h3>
          </div>
        </div>
        <p className="attendance-percentage">
          Porcentaje total de Asistencia: <span className="percentage-value">85.6%</span>
        </p>

        <div className="charts-container">
          {/* Gráfico de Barras */}
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Asistencia" fill="#3f51b5" radius={[10, 10, 0, 0]} />
              <Line type="monotone" dataKey="Asistencia" stroke="#e91e63" strokeWidth={2} />
            </BarChart>
          </ResponsiveContainer>

          {/* Gráfico Circular */}
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Información adicional debajo de la gráfica circular */}
          <div className="donut-info">
            <p>Total Clases: 120</p>
            <p>Días Asistidos: 99</p>
            <p>Días de Ausencia: 21</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttendanceReport;
