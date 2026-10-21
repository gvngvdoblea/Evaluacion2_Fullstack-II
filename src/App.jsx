import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin } from './pages/Admin';
import { useState } from 'react';
import { Checkout } from './pages/Checkout';
import { CompraExitosa } from './pages/CompraExitosa';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Inicio } from './pages/Inicio';
import { Catalogo } from './pages/Catalogo';
import { Nosotros } from './pages/Nosotros';
import { Registro } from './pages/Registro';
import { Contacto } from './pages/Contacto';
import { VistaCarrito } from './pages/VistaCarrito';
import { DetalleProducto } from './pages/DetalleProducto';

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
        <Route path="/producto/:id" element={<DetalleProducto onAgregar={agregarAlCarrito} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Inicio onAgregar={agregarAlCarrito} />} />
        <Route path="/productos" element={<Catalogo onAgregar={agregarAlCarrito} />} /> 
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<VistaCarrito carrito={carrito} setCarrito={setCarrito} />} />
        <Route path="/checkout" element={<Checkout carrito={carrito} total={carrito.reduce((acc, item) => acc + item.precio, 0)} vaciarCarrito={() => setCarrito([])} />} />
        <Route path="/compra-exitosa" element={<CompraExitosa />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;