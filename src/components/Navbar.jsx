import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar({ cantidadCarrito }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header style={{
      backgroundColor: '#161616',
      borderBottom: '1px solid #2a2a2a',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '12px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link 
          to="/" 
          onClick={cerrarMenu}
          style={{
            color: '#d90429',
            textDecoration: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            letterSpacing: '0.5px'
          }}
        >
          El Bajón Urbano
        </Link>

        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/" style={linkStyle}>Inicio</Link>
          <Link to="/productos" style={linkStyle}>Productos</Link>
          <Link to="/nosotros" style={linkStyle}>Nosotros</Link>
          <Link to="/contacto" style={linkStyle}>Contacto</Link>
          <Link to="/login" style={{ ...botonAccionStyle, backgroundColor: '#2a2a2a' }}>Entrar</Link>
          <Link to="/registro" style={{ ...botonAccionStyle, backgroundColor: '#2a2a2a' }}>Registro</Link>
          <Link to="/carrito" style={{ ...botonAccionStyle, backgroundColor: '#d90429' }}>
             Carrito ({cantidadCarrito || 0})
          </Link>
        </nav>

        <div className="nav-mobile-btn" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
          <Link 
            to="/carrito" 
            onClick={cerrarMenu}
            style={{
              backgroundColor: '#d90429',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 'bold'
            }}
          >
             ({cantidadCarrito || 0})
          </Link>

          <button 
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir Menú"
            style={{
              background: '#222',
              border: '1px solid #444',
              color: 'white',
              fontSize: '1.4rem',
              padding: '4px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              lineHeight: 1
            }}
          >
            {menuAbierto ? '✕' : '⋮'}
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div style={{
          backgroundColor: '#1b1b1b',
          borderTop: '1px solid #333',
          padding: '15px 20px',
          marginTop: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          borderRadius: '8px'
        }}>
          <Link to="/" onClick={cerrarMenu} style={linkMovilStyle}>Inicio</Link>
          <Link to="/productos" onClick={cerrarMenu} style={linkMovilStyle}>Productos</Link>
          <Link to="/nosotros" onClick={cerrarMenu} style={linkMovilStyle}>Nosotros</Link>
          <Link to="/contacto" onClick={cerrarMenu} style={linkMovilStyle}>Contacto</Link>
          <hr style={{ border: '0', borderTop: '1px solid #333', margin: '4px 0' }} />
          <Link to="/login" onClick={cerrarMenu} style={linkMovilStyle}> Iniciar Sesión</Link>
          <Link to="/registro" onClick={cerrarMenu} style={linkMovilStyle}> Crear Cuenta</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

const linkStyle = {
  color: '#ccc',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
  padding: '6px 10px',
  borderRadius: '4px',
  transition: 'color 0.2s'
};

const botonAccionStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 'bold',
  padding: '7px 14px',
  borderRadius: '6px'
};

const linkMovilStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  padding: '8px 4px',
  display: 'block'
};