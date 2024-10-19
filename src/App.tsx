import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Usuario/Login';
import Register from './Components/Usuario/Register';
import Loading from './Components/Usuario/Loading'; 
import Home from './Components/Profesor/HomeTeacher';
import CreateGroup from './Components/Profesor/CreateGroup';
import EditProfile from './Components/Usuario/EditProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/loading' element={<Loading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/creategrup" element={<CreateGroup />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
