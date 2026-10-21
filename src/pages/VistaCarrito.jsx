import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export function VistaCarrito({ carrito, setCarrito }) {
const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  const navigate = useNavigate();

  const handlePagar = () => {
    navigate('/checkout');
  };

  const eliminarProducto = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <main className="contenedor" style={{ marginTop: '50px', minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Tu Carrito de Compras</h2>
      
      {carrito.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#adb5bd' }}>No tienes productos en el carrito aún.</p>
          <Link to="/productos" className="btn-accion" style={{ marginTop: '20px', display: 'inline-block' }}>Ir al Menú</Link>
        </div>
      ) : (
        <div style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {carrito.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', padding: '15px 0' }}>
                <span>{item.nombre}</span>
                <div>
                  <span style={{ color: '#ffb703', fontWeight: 'bold', marginRight: '15px' }}>
                    ${item.precio.toLocaleString('es-CL')}
                  </span>
                  <button 
                    onClick={() => eliminarProducto(index)} 
                    style={{ backgroundColor: '#d90429', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ textAlign: 'right', marginTop: '20px', fontSize: '20px' }}>
            <strong>Total a pagar: <span style={{ color: '#ffb703' }}>${total.toLocaleString('es-CL')}</span></strong>
          </div>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <button className="btn-accion" onClick={handlePagar}>Proceder al Pago</button>
          </div>
        </div>
      )}
    </main>
  );
}