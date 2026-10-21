import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const productosDetalle = [
  {
    id: 1,
    nombre: 'Hamburguesa Clásica',
    precio: 5990,
    categoria: 'Hamburguesas',
    imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Doble carne de vacuno smash, queso cheddar fundido, pepinillos dulces, cebolla caramelizada y salsa secreta en pan brioche tostado.',
    ingredientes: ['Doble carne vacuno 120g', 'Queso Cheddar fundido', 'Cebolla caramelizada', 'Salsa de la casa', 'Pan Brioche'],
    tiempo: '15 - 20 min'
  },
  {
    id: 2,
    nombre: 'Completo Italiano',
    precio: 2990,
    categoria: 'Completos',
    imagen: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Vienesa tradicional de primera calidad, abundante palta hass recién molida, tomate en cubitos y mayonesa casera en pan de masa madre suave.',
    ingredientes: ['Vienesa premium', 'Tomate natural picado', 'Palta Hass fresca', 'Mayonesa casera', 'Pan de completo'],
    tiempo: '10 min'
  },
  {
    id: 3,
    nombre: 'Papas Cheddar Bacon',
    precio: 4500,
    categoria: 'Acompañamientos',
    imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Papas fritas rústicas con abundante salsa de queso cheddar fundido y lluvia de tocino ahumado crocante.',
    ingredientes: ['Papas fritas rústicas', 'Salsa de queso cheddar tibia', 'Tocino crocante desmenuzado'],
    tiempo: '12 min'
  },
  {
    id: 4,
    nombre: 'Chorrillana Tradicional',
    precio: 8500,
    categoria: 'Platos',
    imagen: 'https://curiyorkdelivery.cl/wp-content/uploads/2023/11/YEK01232-scaled.jpg',
    descripcion: 'Base crujiente de papas fritas rústicas, abundante carne de vacuno salteada, cebolla frita caramelizada y huevos encima.',
    ingredientes: ['Papas fritas rústicas', 'Carne picada al jugo', 'Cebolla frita suave', 'Huevos fritos'],
    tiempo: '20 - 25 min'
  },
  {
    id: 5,
    nombre: 'Bebida Lata 350ml',
    precio: 1500,
    categoria: 'Bebidas',
    imagen: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Bebida en lata de 350ml bien helada a elección (Coca-Cola, Sprite, Fanta o versión Zero/Light).',
    ingredientes: ['Lata individual 350ml', 'Servida bien fría'],
    tiempo: 'Inmediato'
  }
];

export function DetalleProducto({ onAgregar }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = productosDetalle.find((p) => p.id === Number(id)) || productosDetalle[0];

  return (
    <div style={{ maxWidth: '850px', width: '92%', margin: '25px auto', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '12px', color: 'white', border: '1px solid #333', boxSizing: 'border-box' }}>
      <button 
        onClick={() => navigate('/productos')}
        style={{ background: 'none', border: 'none', color: '#d90429', cursor: 'pointer', fontSize: '1rem', marginBottom: '18px', padding: 0, fontWeight: 'bold' }}
      >
         Volver al Menú
      </button>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
        
        <div style={{ flex: '1 1 280px', width: '100%' }}>
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #444', display: 'block' }}
          />
        </div>

        <div style={{ flex: '1 1 300px', minWidth: '0' }}>
          <span style={{ backgroundColor: '#d90429', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', display: 'inline-block' }}>
            {producto.categoria}
          </span>

          <h1 style={{ margin: '12px 0 8px 0', fontSize: 'clamp(1.4rem, 4vw, 2rem)', wordBreak: 'break-word' }}>
            {producto.nombre}
          </h1>

          <p style={{ fontSize: '1.5rem', color: '#d90429', fontWeight: 'bold', margin: '0 0 15px 0' }}>
            ${producto.precio.toLocaleString('es-CL')}
          </p>

          <p style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem', marginBottom: '15px' }}>
            {producto.descripcion}
          </p>

          <div style={{ backgroundColor: '#222', padding: '12px 15px', borderRadius: '6px', marginBottom: '20px' }}>
            <strong style={{ fontSize: '0.85rem', color: '#aaa', display: 'block', marginBottom: '6px' }}>Detalles / Ingredientes:</strong>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: '#bbb' }}>
              {producto.ingredientes.map((ing, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{ing}</li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => onAgregar(producto)}
            style={{ width: '100%', padding: '14px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.2s' }}
          >
             Añadir al Carrito
          </button>
        </div>

      </div>
    </div>
  );
}