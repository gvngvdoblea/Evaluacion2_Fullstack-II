import { Link } from 'react-router-dom';

export function Navbar({ cantidadCarrito }) {
  return (
    <header className="navbar">
      <div className="nav-contenedor">
        <div className="nav-grupo-izq">
          <Link to="/" className="logo">El Bajón Urbano</Link>
          <nav className="nav-links">
            <Link to="/" className="btn-nav">Inicio</Link>
            <Link to="/productos" className="btn-nav">Productos</Link>
            <Link to="/nosotros" className="btn-nav">Nosotros</Link>
            <Link to="/contacto" className="btn-nav">Contacto</Link>
          </nav>
        </div>
        <div className="nav-grupo-der">
          <Link to="/login" className="btn-nav-accion" style={{marginRight: '8px'}}>Entrar</Link>
          <Link to="/registro" className="btn-nav-accion" style={{marginRight: '8px'}}>Registro</Link>
          <Link to="/carrito" className="btn-nav-accion"> Carrito ({cantidadCarrito})</Link>
        </div>
      </div>
    </header>
  );
}