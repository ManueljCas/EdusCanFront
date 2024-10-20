import React from 'react';
import '../../Css/Loading.css';

function Loading() {
    return (
        <div className="loading-container">
            <h1 className="loading-title">EduScan</h1>
            <span className="loading-emoji">👋</span>
            <p className='loading-text'>Cargando...</p>
        </div>
    );
}

export default Loading;
