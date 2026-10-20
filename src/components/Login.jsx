import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Nuevo estado para guardar y mostrar mensajes de error
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    setError(''); // Limpiamos errores antiguos antes de revisar

    // Validación 1: El correo debe tener un @ y un punto
    if (!email.includes('@') || !email.includes('.')) {
      setError('Error: El correo debe ser válido (ejemplo@correo.com).');
      return; // Detenemos la función aquí
    }

    // Validación 2: La contraseña no puede ser muy corta
    if (password.length < 6) {
      setError('Error: La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Si pasa las validaciones, entra
    alert(`¡Sesión iniciada correctamente para: ${email}!`);
    navigate('/'); 
  };

  return (
    <div className="contenedor-login">
      <div className="tarjeta-login">
        <h2>Iniciar Sesión</h2>
        <p className="subtitulo-login">Ingresa tus datos para continuar</p>
        
        {/* Si hay un error guardado en el estado, mostramos esta alerta roja de Bootstrap */}
        {error && (
          <div style={{ backgroundColor: '#d90429', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="campo-grupo">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="campo-grupo">
            <label>Contraseña</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn-login">Entrar</button>
        </form>
      </div>
    </div>
  );
}