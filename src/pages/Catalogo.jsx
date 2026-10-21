import { Producto } from '../components/Producto';
import completoImg from '../assets/Completo.jpg';

export function Catalogo({ onAgregar }) {
  const productosDb = [
    { id: 1, nombre: 'Hamburguesa Clásica', descripcion: 'Carne 100% vacuno, doble queso cheddar y lechuga.', precio: 5990, imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
    { id: 2, nombre: 'Completo Italiano', descripcion: 'Vienesa tradicional, tomate, palta natural y mayo.', precio: 2990, imagen: completoImg },
    { id: 3, nombre: 'Papas Cheddar Bacon', descripcion: 'Papas rústicas con salsa cheddar y tocino crocante.', precio: 4500, imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500' },
    { id: 4, nombre: 'Chorrillana Tradicional', descripcion: 'Papas fritas, carne de vacuno, cebolla frita y huevo.', precio: 8500, imagen: 'https://curiyorkdelivery.cl/wp-content/uploads/2023/11/YEK01232-scaled.jpg' },
    { id: 5, nombre: 'Bebida Lata 350ml', descripcion: 'Coca-Cola, Sprite, Fanta o bebida light.', precio: 1500, imagen: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' }
  ];

  return (
    <main className="contenedor" style={{ marginTop: '50px', minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Nuestro Menú Completo</h2>
      <p style={{ textAlign: 'center', color: '#adb5bd', marginBottom: '40px' }}>Todo lo que necesitas para tu bajón, preparado al instante.</p>
      
      <div className="grid-productos">
        {productosDb.map(prod => (
          <Producto key={prod.id} {...prod} onAgregar={onAgregar} />
        ))}
      </div>
    </main>
  );
} 