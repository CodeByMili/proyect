// import { useState } from "react";
// import FormModal from "./FormModal";

// export default function RegistroCrud() {
//   const EMPTY = { idCategoria: "", categoria: "", nombre: "", apellido: "", celular: "", index: null };

//   const [registros, setRegistros] = useState([]);
//   const [formData, setFormData] = useState(EMPTY);

//   // guardar (nuevo o edición)
//   const handleSave = (datos) => {
//     if (datos.index !== null) {
//       // actualizar
//       const lista = [...registros];
//       lista[datos.index] = { ...datos };
//       delete lista[datos.index].index;
//       setRegistros(lista);
//     } else {
//       // crear
//       const nuevo = { ...datos };
//       delete nuevo.index;
//       setRegistros([...registros, nuevo]);
//     }

//     // limpiar el formulario
//     setFormData(EMPTY);
//   };

//   const handleEdit = (index) => {
//     setFormData({ ...registros[index], index });
//   };

//   const handleDelete = (index) => {
//     setRegistros(registros.filter((_, i) => i !== index));
//     // si se estaba editando ese registro, limpia el formulario
//     if (formData.index === index) setFormData(EMPTY);
//   };

//   return (
//     <div className="container">
//       <h1>Gestión de registros</h1>

//       {/* Formulario embebido */}
//       <FormModal
//         isOpen={true} // siempre visible
//         initialValues={formData}
//         onClose={() => setFormData(EMPTY)} // botón "Cancelar" opcional
//         onSave={handleSave}
//       />

//       {/* tarjetas de registros */}
//       {registros.map((reg, idx) => (
//         <div className="registro-card" key={idx}>
//           <div className="campo"><label>Id categoría</label><div className="valor">{reg.idCategoria}</div></div>
//           <div className="campo"><label>Categoría</label><div className="valor">{reg.categoria}</div></div>
//           <div className="campo"><label>Nombre</label><div className="valor">{reg.nombre}</div></div>
//           <div className="campo"><label>Apellido</label><div className="valor">{reg.apellido}</div></div>
//           <div className="campo"><label>Celular</label><div className="valor">{reg.celular}</div></div>

//           <button className="btn-editar" onClick={() => handleEdit(idx)}>Editar</button>
//           <button className="btn-eliminar" onClick={() => handleDelete(idx)}>Eliminar</button>
//         </div>
//       ))}
//     </div>
//   );
// }
