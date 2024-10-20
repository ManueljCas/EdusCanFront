import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Importación de BrowserRouter

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve toda la aplicación */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si deseas medir el rendimiento en tu aplicación, usa la función de reportWebVitals
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envía los datos a un endpoint de analítica. Más info: https://bit.ly/CRA-vitals
reportWebVitals();
