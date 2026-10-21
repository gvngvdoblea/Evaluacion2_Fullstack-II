import { Producto } from '../components/Producto';
import completoImg from '../assets/Completo.jpg';

export function Inicio({ onAgregar }) {
  const productosDb = [
    { id: 1, nombre: 'Hamburguesa Clásica', descripcion: 'Carne 100% vacuno, doble queso cheddar y lechuga.', precio: 5990, imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
    { id: 2, nombre: 'Completo Italiano', descripcion: 'Vienesa tradicional, tomate, palta natural y mayo.', precio: 2990, imagen: completoImg },
    { id: 3, nombre: 'Papas Cheddar Bacon', descripcion: 'Papas rústicas con salsa cheddar y tocino crocante.', precio: 4500, imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500' }
  ];

  return (
    <>
      <section className="banner">
        <div className="banner-contenido">
          <h1>SABOR UNICO</h1>
          <p>Comida rápida casera con ingredientes frescos y preparación al instante.</p>
        </div>
      </section>
      <main className="contenedor">
        <h2>Productos Destacados</h2>
        <div className="grid-productos">
          {productosDb.map(prod => (
            <Producto key={prod.id} {...prod} onAgregar={onAgregar} />
          ))}
        </div>
      </main>
    </>
  );
}