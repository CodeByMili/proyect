
function CamposForm({ datos, setDatos }) {
  return (
    <>
      {datos.idCategoria && (
          <div>
              <label>Id Categoria</label>
              <p>{datos.idCategoria}</p>
            {/* <input
                type="number"
                value={datos.idCategoria}
                readOnly
                disabled
                placeholder="Id categoria"
            /> */}
          </div>
      )}
      <div>
        <label>Categoría</label>
        <select
          value={datos.categoria}
          onChange={(e) => setDatos({ ...datos, categoria: e.target.value })}
          required
        >
          <option value="">--escoge--</option>
          <option value="2">Categoría 2</option>
          <option value="3">Categoría 3</option>
          <option value="4">Categoría 4</option>
          <option value="5">Categoría 5</option>
        </select>
      </div>

      <div>
        <label>Id Punto de Venta</label>
        <input
            type="number"
            value={datos.idPuntoVenta}
            onChange={(e) => setDatos({ ...datos, idPuntoVenta: e.target.value })}
            required
        />
      </div>
      <div>
        <label>Punto de venta</label>
        <input
            type="text"
            value={datos.puntoVenta}
            onChange={(e) => setDatos({ ...datos, puntoVenta: e.target.value })}
            required
        />
      </div>
      <div>
        <label>Base</label>
        <input
          type="text"
          value={datos.base}
          onChange={(e) => setDatos({ ...datos, base: e.target.value })}
          required
        />
      </div>
       <div>
        <label>Zona</label>
        <input
          type="text"
          value={datos.zona}
          onChange={(e) => setDatos({ ...datos, zona: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Otro Valor</label>
        <input
          type="number"
          value={datos.otroValor}
          onChange={(e) => setDatos({ ...datos, otroValor: e.target.value })}
          required
        />
      </div>
    </>
  );
}

export default CamposForm;