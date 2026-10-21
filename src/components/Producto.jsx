import React from 'react';
import { Link } from 'react-router-dom';

export function Producto({ id, nombre, descripcion, precio, imagen, onAgregar }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="descripcion">{descripcion}</p>
      <span className="precio">${precio.toLocaleString('es-CL')}</span>

      <Link 
        to={`/producto/${id}`}
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '10px',
          color: '#ff6600',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}
      >
        Ver detalle 
      </Link>

      <button 
        className="btn-secundario" 
        style={{ display: 'block', width: '100%', marginTop: '8px', cursor: 'pointer', border: 'none' }}
        onClick={() => onAgregar({ id, nombre, precio, imagen })}
      >
        Agregar al carrito
      </button>
    </div>
  );
}