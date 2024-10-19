import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importación de los componentes necesarios
import Login from './Components/Usuario/Login';
import Register from './Components/Usuario/Register';
import Loading from './Components/Usuario/Loading';
import HomeTeacher from './Components/Profesor/HomeTeacher';
import CreateGroup from './Components/Profesor/CreateGroup';
import EditProfile from './Components/Usuario/EditProfile';
import AttendanceReport from './Components/Alumno/AttendanceReport';
import HomeStudent from './Components/Alumno/HomeStudent';
import Notifications from './Components/Alumno/Notifications';
import QrStudent from './Components/Alumno/QrStudent';
import AddStudents from './Components/Profesor/AddStudents';
import Calendar from './Components/Profesor/Calendar';
import RollCall from './Components/Profesor/RollCall';
import ScanQr from './Components/Profesor/ScanQr';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/home" element={<HomeTeacher />} />
          <Route path="/creategroup" element={<CreateGroup />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/attendance-report" element={<AttendanceReport />} />
          <Route path="/home-student" element={<HomeStudent />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/qr-student" element={<QrStudent />} />
          <Route path="/add-students" element={<AddStudents />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/roll-call" element={<RollCall />} />
          <Route path="/scan-qr" element={<ScanQr />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
