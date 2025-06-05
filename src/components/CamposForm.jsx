function CamposForm({ datos, setDatos, errores }) {
  return (
    <>
      <div className="campo">
        <label>Categoría:</label>
        <input
          type="text"
          value={datos.categoria}
          onChange={e => setDatos({ ...datos, categoria: e.target.value })}
        />
        {errores?.categoria && <p className="error">{errores.categoria}</p>}
      </div>

      <div className="campo">
        <label>Id Punto de Venta:</label>
        <input
          type="text"
          value={datos.idPuntoVenta}
          onChange={e => setDatos({ ...datos, idPuntoVenta: e.target.value })}
        />
        {errores?.idPuntoVenta && <p className="error">{errores.idPuntoVenta}</p>}
      </div>

      <div className="campo">
        <label>Punto de Venta:</label>
        <input
          type="text"
          value={datos.puntoVenta}
          onChange={e => setDatos({ ...datos, puntoVenta: e.target.value })}
        />
        {errores?.puntoVenta && <p className="error">{errores.puntoVenta}</p>}
      </div>

      <div className="campo">
        <label>Base:</label>
        <input
          type="text"
          value={datos.base}
          onChange={e => setDatos({ ...datos, base: e.target.value })}
        />
        {errores?.base && <p className="error">{errores.base}</p>}
      </div>

      <div className="campo">
        <label>Zona:</label>
        <input
          type="text"
          value={datos.zona}
          onChange={e => setDatos({ ...datos, zona: e.target.value })}
        />
        {errores?.zona && <p className="error">{errores.zona}</p>}
      </div>

      <div className="campo">
        <label>Otro Valor:</label>
        <input
          type="text"
          value={datos.otroValor}
          onChange={e => setDatos({ ...datos, otroValor: e.target.value })}
        />
        {/* Si quieres validar otroValor, agrega aquí el error */}
      </div>
    </>
  );
}

export default CamposForm;
