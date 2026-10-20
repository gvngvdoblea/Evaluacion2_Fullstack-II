import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';

import { Inicio } from './pages/Inicio';
import { Catalogo } from './pages/Catalogo';
import { Nosotros } from './pages/Nosotros';
import { Registro } from './pages/Registro';
import { Contacto } from './pages/Contacto';
import { VistaCarrito } from './pages/VistaCarrito';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`¡${producto.nombre} añadido al carrito!`);
  };

  return (
    <BrowserRouter>
      <Navbar cantidadCarrito={carrito.length} />
      
      <Routes>
        <Route path="/" element={<Inicio onAgregar={agregarAlCarrito} />} />
        <Route path="/productos" element={<Catalogo onAgregar={agregarAlCarrito} />} /> 
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<VistaCarrito carrito={carrito} setCarrito={setCarrito} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;