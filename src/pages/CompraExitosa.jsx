import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export function CompraExitosa() {
  const location = useLocation();
  const datos = location.state || {};
  const numeroOrden = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', backgroundColor: '#1a1a1a', borderRadius: '10px', color: 'white', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', color: '#28a745', marginBottom: '10px' }}>✓</div>
      <h2 style={{ color: '#28a745', margin: '0 0 10px 0' }}>¡Compra realizada con éxito!</h2>
      <p style={{ color: '#aaa', fontSize: '1.1rem' }}>Orden nro #{numeroOrden}</p>

      <div style={{ textAlign: 'left', backgroundColor: '#222', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
        <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #333', paddingBottom: '5px' }}>Resumen del Despacho</h4>
        <p style={{ margin: '5px 0' }}><strong>Cliente:</strong> {datos.cliente?.nombre || 'Cliente'} {datos.cliente?.apellidos || ''}</p>
        <p style={{ margin: '5px 0' }}><strong>Correo:</strong> {datos.cliente?.correo || 'No especificado'}</p>
        <p style={{ margin: '5px 0' }}><strong>Dirección:</strong> {datos.cliente?.calle || 'Dirección ingresada'}, {datos.cliente?.comuna || ''}</p>
        <p style={{ margin: '5px 0', color: '#ff6600', fontWeight: 'bold' }}>
          <strong>Total Pagado:</strong> ${datos.total ? datos.total.toLocaleString('es-CL') : '0'}
        </p>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#888' }}>Hemos enviado el comprobante a tu correo electrónico.</p>
      
      <Link to="/" style={{ display: 'inline-block', marginTop: '15px', padding: '12px 25px', backgroundColor: '#ff6600', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
        Volver al Inicio
      </Link>
    </div>
  );
}