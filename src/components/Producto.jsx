import React from 'react';


export function Producto({ id, nombre, descripcion, precio, imagen, onAgregar }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="descripcion">{descripcion}</p>
      <span className="precio">${precio.toLocaleString('es-CL')}</span>
      <button 
        className="btn-secundario" 
        style={{ display: 'block', width: '100%', marginTop: '8px', cursor: 'pointer', border: 'none' }}
        onClick={() => onAgregar({ id, nombre, precio })}
      >
        Agregar al carrito
      </button>
    </div>
  );
}