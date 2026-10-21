import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    if (!nombre || !email || !password) {
      setMensaje('Por favor completa todos los campos.');
      return;
    }
    alert('¡Cuenta creada con éxito! Redirigiendo al inicio de sesión...');
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{
        maxWidth: '420px',
        width: '100%',
        backgroundColor: '#1e1e1e',
        borderRadius: '12px',
        padding: '35px',
        color: 'white',
        border: '1px solid #333',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '1.8rem' }}>Crear Cuenta</h2>
        <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginBottom: '25px' }}>
          Únete a El Bajón Urbano
        </p>

        {mensaje && (
          <div style={{ backgroundColor: 'rgba(217, 4, 41, 0.2)', border: '1px solid #d90429', color: '#ff6b6b', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '0.85rem', textAlign: 'center' }}>
            {mensaje}
          </div>
        )}

        <form onSubmit={handleRegistro} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#ccc', marginBottom: '6px' }}>Nombre Completo</label>
            <input 
              type="text" 
              placeholder="Ej: Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#2a2a2a',
                border: '1px solid #444',
                borderRadius: '6px',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#ccc', marginBottom: '6px' }}>Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="ejemplo@correo.cl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#2a2a2a',
                border: '1px solid #444',
                borderRadius: '6px',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#ccc', marginBottom: '6px' }}>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#2a2a2a',
                border: '1px solid #444',
                borderRadius: '6px',
                color: 'white',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button 
            type="submit" 
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#d90429',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'opacity 0.2s'
            }}
          >
            Registrarse
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: '#888' }}>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" style={{ color: '#d90429', textDecoration: 'none', fontWeight: 'bold' }}>
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
}