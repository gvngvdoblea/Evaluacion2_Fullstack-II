export function Nosotros() {
  return (
    <main className="contenedor" style={{ marginTop: '50px', minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Sobre Nosotros</h2>
      <div style={{ backgroundColor: '#1e1e1e', padding: '30px', borderRadius: '8px', border: '1px solid #333', lineHeight: '1.8' }}>
        <h3 style={{ color: '#ffb703', marginBottom: '15px' }}>Nuestra Historia</h3>
        <p style={{ color: '#adb5bd', marginBottom: '20px' }}>
          El Bajón Urbano nació con una idea simple: ofrecer la mejor comida rápida casera para esos momentos de hambre incontrolable. 
          Comenzamos como un pequeño carrito y, gracias a nuestros fieles clientes, hemos crecido manteniendo siempre nuestra esencia: 
          ingredientes frescos, porciones generosas y preparación al instante.
        </p>
        <h3 style={{ color: '#ffb703', marginBottom: '15px' }}>Nuestra Misión</h3>
        <p style={{ color: '#adb5bd' }}>
          Ser tu primera opción cuando pienses en un buen bajón. Queremos que cada bocado te haga sentir en casa, 
          entregando calidad y sabor en cada pedido, ya sea que nos visites o pidas a domicilio.
        </p>
      </div>
    </main>
  );
}