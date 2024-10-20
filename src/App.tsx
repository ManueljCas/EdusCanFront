import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

// Componentes cargados perezosamente
const Login = lazy(() => import('./Components/Usuario/Login'));
const Register = lazy(() => import('./Components/Usuario/Register'));
const LoadingComponent = lazy(() => import('./Components/Usuario/Loading'));
const HomeTeacher = lazy(() => import('./Components/Profesor/HomeTeacher'));
const CreateGroup = lazy(() => import('./Components/Profesor/CreateGroup'));
const EditProfile = lazy(() => import('./Components/Usuario/EditProfile'));
const AttendanceReport = lazy(() => import('./Components/Alumno/AttendanceReport'));
const HomeStudent = lazy(() => import('./Components/Alumno/HomeStudent'));
const Notifications = lazy(() => import('./Components/Alumno/Notifications'));
const QrStudent = lazy(() => import('./Components/Alumno/QrStudent'));
const AddStudents = lazy(() => import('./Components/Profesor/AddStudents'));
const Calendar = lazy(() => import('./Components/Profesor/Calendar'));
const RollCall = lazy(() => import('./Components/Profesor/RollCall'));
const ScanQr = lazy(() => import('./Components/Profesor/ScanQr'));
const EditGroup = lazy(() => import('./Components/Profesor/EditGroup'));

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300); // Breve espera para la carga
    return () => clearTimeout(timer);
  }, [location]);

  // Usar `isLoading` para mostrar la pantalla de carga
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen />}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            classNames="slide"
            timeout={300}
            unmountOnExit
          >
            <Routes location={location}>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/loading" element={<LoadingComponent />} />
              <Route path="/home" element={<HomeTeacher />} />
              <Route path="/creategroup" element={<CreateGroup />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/attendance-report" element={<AttendanceReport />} />
              <Route path="/home-student" element={<HomeStudent />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/qr-student" element={<QrStudent />} />
              <Route path="/add-students/:id" element={<AddStudents />} />
              <Route path="/calendar/:id" element={<Calendar />} />
              <Route path="/roll-call/:id" element={<RollCall />} />
              <Route path="/scan-qr" element={<ScanQr />} />
              <Route path="/edit-group/:id" element={<EditGroup />} />
              <Route path="*" element={<Navigate to="/loading" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </div>
  );
}

export default App;

function LoadingScreen() {
  return (
    <LoadingComponent/>
  );
}
