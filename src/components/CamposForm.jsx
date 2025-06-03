function CamposForm({ datos, setDatos }) {
  return (
    <>
      <div>
        <label>Id categoría</label>
        <input
          type="number"
          value={datos.idCategoria}
          onChange={(e) => setDatos({ ...datos, idCategoria: e.target.value })}
          required
        />
      </div>

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
        <label>Nombre</label>
        <input
          value={datos.nombre}
          onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
          required
        />
      </div>

      <div>
        <label>Apellido</label>
        <input
          value={datos.apellido}
          onChange={(e) => setDatos({ ...datos, apellido: e.target.value })}
          required
        />
      </div>

      <div>
        <label>Celular</label>
        <input
          type="number"
          value={datos.celular}
          onChange={(e) => setDatos({ ...datos, celular: e.target.value })}
          required
        />
      </div>
    </>
  );
}

export default CamposForm;
