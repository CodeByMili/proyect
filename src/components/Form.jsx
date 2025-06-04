import "../style/form.css";
import { useState } from "react";
import CamposForm from "./CamposForm";
import Tarjeta from "./Tarjeta";

function Form() {

  const vacio = () => ({
    idCategoria : '',
    categoria: '',
    idPuntoVenta: '',
    puntoVenta: '',
    base :'',
    zona : '',
    otroValor: ''

  });

  const [registros, setRegistros] = useState([]);
  const [datos, setDatos] = useState(vacio());
  const [indiceEdit, setIndiceEdit] = useState(null);
  const [busqueda, setBusqueda] = useState("")

  const registrosFiltrados = registros.filter(reg =>
    Object.values(reg).some(valor =>
      valor.toString().toLowerCase().includes(busqueda.toLocaleLowerCase())
    )
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (indiceEdit !== null) {
      const copia = [...registros];
      copia[indiceEdit] = datos;
      setRegistros(copia);
    } else {
      console.log(datos)
      setRegistros([...registros, datos]);
      try{
        const PuntosVenta = {
          idCategoria: '1',
          categoria: '1',
          idPuntoVenta: '1',
          puntoVenta: '1',
          base :'errt',
          zona : 'Pereira',
          otroValor: '4'
        }
        // const data = await createArqueo(PuntosVenta);
        console.log("Datos enviados", PuntosVenta);
      }catch{
        console.log("Datos enviados incorrectamente");
      }
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
        <CamposForm datos={datos} setDatos={setDatos} />
        <button type="submit" className="btn-registrar">
          {indiceEdit !== null ? "Actualizar" : "Registrar"}
        </button>
        {indiceEdit !== null && (
          <button type="button" className="btn-registrar" onClick={handleCancel}>
            Cancelar
          </button>
        )}
      </form>

      <div className="tarjetas-scroll">
         {registrosFiltrados.map((reg, idx) => (
        <Tarjeta
          key={idx}
          registro={reg}
          onEdit={() => handleEdit(idx)}
          onDelete={() => handleDelete(idx)}
        />
      ))}
      </div>
   
    </div>
  );
}

export default Form;


