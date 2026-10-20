import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Registro() {
  const [datos, setDatos] = useState({ nombre: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    setError('');

    if (datos.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    alert(`Usuario ${datos.nombre} registrado con éxito.`);
    navigate('/login');
  };

  return (
    <div className="contenedor-login">
      <div className="tarjeta-login">
        <h2>Crear Cuenta</h2>
        <p className="subtitulo-login">Únete a El Bajón Urbano</p>
        
        {error && <div style={{ backgroundColor: '#d90429', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px' }}>{error}</div>}

        <form onSubmit={handleRegistro}>
          <div className="campo-grupo">
            <label>Nombre Completo</label>
            <input type="text" required onChange={(e) => setDatos({...datos, nombre: e.target.value})} />
          </div>
          <div className="campo-grupo">
            <label>Correo Electrónico</label>
            <input type="email" required onChange={(e) => setDatos({...datos, email: e.target.value})} />
          </div>
          <div className="campo-grupo">
            <label>Contraseña</label>
            <input type="password" required onChange={(e) => setDatos({...datos, password: e.target.value})} />
          </div>
          <button type="submit" className="btn-login">Registrarse</button>
        </form>
      </div>
    </div>
  );
}