import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importamos tus vistas/páginas
import Home from '../pages/Home'; 

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Home />} />

      {/* Ejemplo de una ruta 404 (Not Found) opcional */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRoutes;