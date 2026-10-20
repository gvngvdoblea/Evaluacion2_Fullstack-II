export function Contacto() {
  return (
    <div className="contenedor-login">
      <div className="tarjeta-login" style={{maxWidth: '600px'}}>
        <h2>Contáctanos</h2>
        <p className="subtitulo-login">Envíanos un mensaje y te responderemos pronto</p>
        
        <form onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado'); }}>
          <div className="campo-grupo">
            <label>Motivo</label>
            <select required style={{width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #333', color: 'white', borderRadius: '5px'}}>
              <option value="">Selecciona una opción</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
              <option value="felicitacion">Felicitación</option>
            </select>
          </div>
          <div className="campo-grupo">
            <label>Mensaje</label>
            <textarea rows="4" required style={{width: '100%', padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #333', color: 'white', borderRadius: '5px'}}></textarea>
          </div>
          <button type="submit" className="btn-login">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}