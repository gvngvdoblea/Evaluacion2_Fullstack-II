import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Admin() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Hamburguesa Clásica', categoria: 'Hamburguesas', precio: 5990, stock: 25 },
    { id: 2, nombre: 'Completo Italiano', categoria: 'Completos', precio: 2990, stock: 40 },
    { id: 3, nombre: 'Papas Cheddar Bacon', categoria: 'Acompañamientos', precio: 4500, stock: 18 },
    { id: 4, nombre: 'Chorrillana Tradicional', categoria: 'Platos', precio: 8500, stock: 12 },
    { id: 5, nombre: 'Bebida Lata 350ml', categoria: 'Bebidas', precio: 1500, stock: 60 }
  ]);

  const [nuevo, setNuevo] = useState({ nombre: '', categoria: 'Hamburguesas', precio: '', stock: '' });

  const handleEliminar = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.precio) return;
    const item = {
      id: productos.length > 0 ? Math.max(...productos.map(p => Number(p.id) || 0)) + 1 : 1,
      nombre: nuevo.nombre,
      categoria: nuevo.categoria,
      precio: Number(nuevo.precio),
      stock: Number(nuevo.stock) || 10
    };
    setProductos([...productos, item]);
    setNuevo({ nombre: '', categoria: 'Hamburguesas', precio: '', stock: '' });
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '20px', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
        <div>
          <h2 style={{ margin: 0, color: '#ff6600' }}>Panel Administrativo - El Bajón Urbano</h2>
          <p style={{ margin: '5px 0 0 0', color: '#888', fontSize: '0.9rem' }}>Gestión de inventario, métricas diarias y catálogo</p>
        </div>
        <Link to="/" style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '0.9rem' }}>
          ← Volver a la Tienda
        </Link>
      </div>

      {/* Tarjetas de Métricas solicitadas en la pauta */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#0d6efd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Ventas del Día</h4>
          <h2 style={{ margin: '10px 0', fontSize: '2rem' }}>$148.500</h2>
          <small>32 pedidos completados</small>
        </div>
        <div style={{ backgroundColor: '#198754', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Productos en Menú</h4>
          <h2 style={{ margin: '10px 0', fontSize: '2rem' }}>{productos.length}</h2>
          <small>Inventario sincronizado</small>
        </div>
        <div style={{ backgroundColor: '#ffc107', color: '#222', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold' }}>Usuarios Registrados</h4>
          <h2 style={{ margin: '10px 0', fontSize: '2rem' }}>128</h2>
          <small>Clientes activos</small>
        </div>
      </div>

      {/* Formulario para Crear Nuevo Producto (CRUD: Create) */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#ff6600' }}>Agregar Nuevo Producto al Catálogo</h4>
        <form onSubmit={handleAgregar} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: '10px', alignItems: 'end' }}>
          <div>
            <label style={{ fontSize: '0.8rem', display: 'block', marginBottom: '5px' }}>Nombre</label>
            <input 
              type="text" 
              placeholder="Ej: Mechada Queso" 
              value={nuevo.nombre} 
              onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })} 
              required
              style={{ width: '100%', padding: '8px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', display: 'block', marginBottom: '5px' }}>Categoría</label>
            <select 
              value={nuevo.categoria} 
              onChange={e => setNuevo({ ...nuevo, categoria: e.target.value })}
              style={{ width: '100%', padding: '8px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '4px' }}
            >
              <option value="Hamburguesas">Hamburguesas</option>
              <option value="Completos">Completos</option>
              <option value="Platos">Platos</option>
              <option value="Bebidas">Bebidas</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', display: 'block', marginBottom: '5px' }}>Precio ($)</label>
            <input 
              type="number" 
              placeholder="Ej: 6500" 
              value={nuevo.precio} 
              onChange={e => setNuevo({ ...nuevo, precio: e.target.value })} 
              required
              style={{ width: '100%', padding: '8px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.8rem', display: 'block', marginBottom: '5px' }}>Stock</label>
            <input 
              type="number" 
              placeholder="Ej: 20" 
              value={nuevo.stock} 
              onChange={e => setNuevo({ ...nuevo, stock: e.target.value })} 
              style={{ width: '100%', padding: '8px', backgroundColor: '#2a2a2a', border: '1px solid #444', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <button type="submit" style={{ padding: '9px 18px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            + Guardar
          </button>
        </form>
      </div>

      {/* Tabla de Productos (CRUD: Read y Delete) */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
        <h4 style={{ margin: '0 0 15px 0' }}>Inventario de Productos</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #444', color: '#888', fontSize: '0.9rem' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Producto</th>
              <th style={{ padding: '10px' }}>Categoría</th>
              <th style={{ padding: '10px' }}>Precio</th>
              <th style={{ padding: '10px' }}>Stock</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid #2a2a2a' }}>
                <td style={{ padding: '12px 10px', color: '#888' }}>#{p.id}</td>
                <td style={{ padding: '12px 10px', fontWeight: 'bold' }}>{p.nombre}</td>
                <td style={{ padding: '12px 10px' }}><span style={{ backgroundColor: '#333', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem' }}>{p.categoria}</span></td>
                <td style={{ padding: '12px 10px', color: '#ff6600' }}>${p.precio.toLocaleString('es-CL')}</td>
                <td style={{ padding: '12px 10px' }}>{p.stock} un.</td>
                <td style={{ padding: '12px 10px', textAlign: 'center' }}>
                  <button 
                    onClick={() => handleEliminar(p.id)}
                    style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}