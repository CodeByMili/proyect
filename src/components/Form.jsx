import "../style/form.css";
import { useState } from "react";
import CamposForm from "./CamposForm";

function Form() {
  const vacio = () => ({
    categoria: '',
    idPuntoVenta: '',
    puntoVenta: '',
    base: '',
    zona: '',
    otroValor: ''
  });

  const [registros, setRegistros] = useState([]);
  const [datos, setDatos] = useState(vacio());
  const [indiceEdit, setIndiceEdit] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [errores, setErrores] = useState({});


  const validarCampos = () => {
  const erroresTemp = {};

  if (!datos.categoria.trim()) erroresTemp.categoria = "La categoría es obligatoria";
  if (!datos.idPuntoVenta.trim()) erroresTemp.idPuntoVenta = "El ID punto de venta es obligatorio";
  if (!datos.puntoVenta.trim()) erroresTemp.puntoVenta = "El punto de venta es obligatorio";
  if (!datos.base.trim()) erroresTemp.base = "La base es obligatoria";
  if (!datos.zona.trim()) erroresTemp.zona = "La zona es obligatoria";
  // Por ejemplo, otroValor es opcional, si quieres puedes validar también.

  return erroresTemp;
};


  const registrosFiltrados = registros.filter(reg =>
    Object.values(reg).some(valor =>
      valor.toString().toLowerCase().includes(busqueda.toLocaleLowerCase())
    )
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const erroresValidacion = validarCampos();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return; // No se envía hasta corregir errores
   }
    setErrores({});

    if (indiceEdit !== null) {
      const copia = [...registros];
      copia[indiceEdit] = datos;
      setRegistros(copia);
    } else {
      setRegistros([...registros, datos]);
    }

    setDatos(vacio());
    setIndiceEdit(null);
  };

  const handleEdit = (index) => {
    setDatos({ ...registros[index] });
    setIndiceEdit(index);
  };

  const handleDelete = (index) => {
    setRegistros(registros.filter((_, i) => i !== index));
    if (indiceEdit === index) {
      setDatos(vacio());
      setIndiceEdit(null);
    }
  };

  const handleCancel = () => {
    setDatos(vacio());
    setIndiceEdit(null);
  };

  return (
    <div className="container">
      <h2>Base puntos de venta</h2>

      <input
        type="text"
        placeholder="Busqueda"
        className="busqueda"
        onChange={e => setBusqueda(e.target.value)}
      />
     <form onSubmit={handleSubmit} className="form">
  <CamposForm datos={datos} setDatos={setDatos} errores={errores} />


  <div className="botones-form">
    {/* Modo Registrar */}
    {indiceEdit === null && (
      <button
        type="submit"
        className="btn-registro"
      >
        Registrar
      </button>
    )}

    {/* Modo Editar: Actualizar + Cancelar */}
    {indiceEdit !== null && (
      <>
        <div className="botones-form">
            <button
            type="submit"
            className="btn-actualizar"
          >
            Actualizar
          </button>
          <button
            type="button"
            className="btn-cancelar"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
        
      </>
    )}
  </div>
</form>


      <div style={{overflowX: "auto", marginTop: "30px"}}>
        <table className="tabla-registros">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Id Punto de Venta</th>
              <th>Punto de venta</th>
              <th>Base</th>
              <th>Zona</th>
              <th>Otro Valor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registrosFiltrados.map((reg, idx) => (
              <tr key={idx}>
                <td>{reg.categoria}</td>
                <td>{reg.idPuntoVenta}</td>
                <td>{reg.puntoVenta}</td>
                <td>{reg.base}</td>
                <td>{reg.zona}</td>
                <td>{reg.otroValor}</td>
                <td>
                  <button className="btn-editar" onClick={() => handleEdit(idx)}>Editar</button>
                  <button className="btn-eliminar" onClick={() => handleDelete(idx)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {registrosFiltrados.length === 0 && (
              <tr>
                <td colSpan={7} style={{textAlign: "center"}}>No hay registros</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
