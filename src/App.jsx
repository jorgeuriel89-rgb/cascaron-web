import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AGIndustries from './components/AGIndustries/AGIndustries';

// Componente temporal para el Editor (puedes moverlo a su propio archivo luego)
const EditorPage = () => (
  <div style={{ padding: '50px', backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
    <h1 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>PANEL DE EDICIÓN</h1>
    <p>Desde aquí podrás ingresar nuevos códigos o textos para el apartado de Marte.</p>
    <textarea 
      style={{ width: '100%', height: '300px', backgroundColor: '#1a1a1a', color: '#00ff00', padding: '15px', border: '1px solid #333' }}
      placeholder="Escribe el nuevo contenido aquí..."
    />
    <br />
    <button style={{ marginTop: '20px', padding: '10px 25px', backgroundColor: '#fff', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
      GUARDAR CAMBIOS
    </button>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<AGIndustries />} />
        
        {/* Tu nueva pestaña independiente */}
        <Route path="/Editor" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}

export default App;