function Tarjeta({ registro, onEdit, onDelete }) {
  return (
    <div className="registro-card">
      {Object.entries(registro).map(([k, v]) => (
        <div className="campo" key={k}>
          <label>{k}</label>
          <div className="valor">{v}</div>
        </div>
      ))}

      <button className="btn-editar" onClick={onEdit}>Editar</button>
      <button className="btn-eliminar" onClick={onDelete}>Eliminar</button>
    </div>
  );
}

export default Tarjeta;
