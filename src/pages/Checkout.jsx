import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Checkout({ carrito, total, vaciarCarrito }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    calle: '',
    depto: '',
    region: 'Región Metropolitana de Santiago',
    comuna: 'Santiago Centro',
    indicaciones: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vaciarCarrito) vaciarCarrito();
    navigate('/compra-exitosa', { state: { cliente: formData, total, items: carrito } });
  };

  return (
    <div style={{ maxWidth: '750px', margin: '30px auto', padding: '25px', backgroundColor: '#1a1a1a', borderRadius: '10px', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
        <h2>Finalizar Compra (Checkout)</h2>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ff6600' }}>
          Total a pagar: ${total ? total.toLocaleString('es-CL') : '0'}
        </span>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#aaa', marginBottom: '10px' }}>Información del Cliente</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label style={{ fontSize: '0.9rem' }}>Nombre *</label>
            <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '5px' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.9rem' }}>Apellidos *</label>
            <input required type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '5px' }} />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '0.9rem' }}>Correo Electrónico *</label>
          <input required type="email" name="correo" value={formData.correo} onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '5px' }} />
        </div>

        <h4 style={{ color: '#aaa', marginBottom: '10px' }}>Dirección de Entrega</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label style={{ fontSize: '0.9rem' }}>Calle y Número *</label>
            <input required type="text" name="calle" value={formData.calle} onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '5px' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.9rem' }}>Depto / Casa</label>
            <input type="text" name="depto" value={formData.depto} onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '5px' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label style={{ fontSize: '0.9rem' }}>Región</label>
            <input type="text" name="region" value={formData.region} readOnly style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#222', border: '1px solid #444', color: '#888', borderRadius: '5px' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.9rem' }}>Comuna *</label>
            <input required type="text" name="comuna" value={formData.comuna} onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '5px' }} />
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ fontSize: '0.9rem' }}>Indicaciones de entrega (opcional)</label>
          <textarea name="indicaciones" rows="2" value={formData.indicaciones} onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '5px' }}></textarea>
        </div>

        <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Confirmar y Pagar ${total ? total.toLocaleString('es-CL') : '0'}
        </button>
      </form>
    </div>
  );
}