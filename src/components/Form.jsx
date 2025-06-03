import "../style/form.css";
import { useState } from "react";
import CamposForm from "./CamposForm";
import Tarjeta from "./Tarjeta";

function Form() {
  // Función para obtener un objeto vacío de registro
  const vacio = () => ({
    idCategoria: '',
    categoria: '',
    nombre: '',
    apellido: '',
    celular: ''
  });

  // Estado con arreglo de registros (no objeto)
  const [registros, setRegistros] = useState([]);
  const [datos, setDatos] = useState(vacio());
  const [indiceEdit, setIndiceEdit] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (indiceEdit !== null) {
      const copia = [...registros];
      copia[indiceEdit] = datos;
      setRegistros(copia);
    } else {
      setRegistros([...registros, datos]);
    }

    setDatos(vacio());
    setIndiceEdit(null);
    setMostrarModal(false);
  };

  const handleEdit = (index) => {
    setDatos(registros[index]);
    setIndiceEdit(index);
    setMostrarModal(true);
  };

  const handleDelete = (index) => {
    setRegistros(registros.filter((_, i) => i !== index));
    if (indiceEdit === index) {
      setDatos(vacio());
      setIndiceEdit(null);
      setMostrarModal(false);
    }
  };

  return (
    <div className="container">
      <h2>Gestión de registros</h2>

      {!mostrarModal && (
        <form onSubmit={handleSubmit} className="form">
          <CamposForm datos={datos} setDatos={setDatos} />
          <button type="submit" className="btn-registrar">Registrar</button>
        </form>
      )}

      {registros.map((reg, idx) => (
        <Tarjeta
          key={idx}
          registro={reg}
          onEdit={() => handleEdit(idx)}
          onDelete={() => handleDelete(idx)}
        />
      ))}

      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <span className="cerrar" onClick={() => {
              setMostrarModal(false);
              setIndiceEdit(null);
              setDatos(vacio());
            }}>&times;</span>

            <form onSubmit={handleSubmit} className="form">
              <CamposForm datos={datos} setDatos={setDatos} />
              <button type="submit" className="btn-registrar">Actualizar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
