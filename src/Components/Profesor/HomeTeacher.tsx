import React from 'react';
import BottomNav from '../Nav/BottomNav'; // Ruta corregida

function Home() {
    return (
        <div style={{ height: '100vh', paddingTop: '60px', paddingBottom: '70px', backgroundColor: '#f5f5f5' }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <p>En este momento no se ha creado ningún grupo, es una lástima...</p>
            </div>
            <BottomNav />
        </div>
    );
}

export default Home;
