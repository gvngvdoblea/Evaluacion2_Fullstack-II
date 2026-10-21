import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (!email.includes('@') || !email.includes('.')) {
      setError('Error: El correo debe ser válido (ejemplo@correo.com).');
      return; 
    }

    if (password.length < 6) {
      setError('Error: La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (email === 'admin@bajon.cl' && password === 'admin123') {
      alert('¡Acceso concedido como Administrador!');
      navigate('/admin');
      return;
    }

    alert(`¡Sesión iniciada correctamente para: ${email}!`);
    navigate('/'); 
  };

  return (
    <div style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '420px', backgroundColor: '#1a1a1a', padding: '35px 30px', borderRadius: '12px', border: '1px solid #333', boxShadow: '0 8px 24px rgba(0,0,0,0.6)', color: 'white' }}>
        <h2 style={{ textAlign: 'center', margin: '0 0 8px 0', fontSize: '1.8rem' }}>Iniciar Sesión</h2>
        <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', margin: '0 0 25px 0' }}>Ingresa tus datos para continuar</p>
        
        {error && (
          <div style={{ backgroundColor: '#d90429', color: 'white', padding: '10px 14px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.85rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '7px', fontSize: '0.9rem', color: '#ccc' }}>
              Correo Electrónico
            </label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder=""
              required 
              style={{ width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '6px', color: 'white', fontSize: '0.95rem', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '7px', fontSize: '0.9rem', color: '#ccc' }}>
              Contraseña
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              required 
              style={{ width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '6px', color: 'white', fontSize: '0.95rem', boxSizing: 'border-box' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ width: '100%', padding: '12px', backgroundColor: '#d90429', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}