
function Tarjeta({ registro, onEdit, onDelete }) {
  return (
    <div className="registro-container">
      {Object.entries(registro).map(([k, v]) => (
        <div className="campo" key={k}>
          <label>{k}</label>
          <div className="valor">{v}</div>
        </div>
      ))}
      <div className="botones">
        <button className="btn-editar" onClick={onEdit}>Editar</button>
        <button className="btn-eliminar" onClick={onDelete}>Eliminar</button>
      </div>
     
    </div>
  );
}

export default Tarjeta;