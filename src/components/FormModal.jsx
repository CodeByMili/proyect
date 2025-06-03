// import "../style/form.css";
// import { useEffect, useState } from "react";

// export default function FormModal({ isOpen, initialValues, onClose, onSave }) {
//   const [datos, setDatos] = useState(initialValues);

//   // cuando cambien las “initialValues”, recárgalas en el form
//   useEffect(() => setDatos(initialValues), [initialValues]);

//   if (!isOpen) return null; // ⬅️ no renders, modal cerrado

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(datos);   // ← envía los datos al padre
//     onClose();       // ← cierra el modal
//   };

//   return (
//     <div className="modal">
//       <div className="modal-contenido">
//         <span className="cerrar" onClick={onClose}>
//           &times;
//         </span>

//         <h2>{initialValues.index !== null ? "Editar registro" : "Nuevo registro"}</h2>

//         <form onSubmit={handleSubmit} className="form">
//           <div>
//             <label>Id categoría</label>
//             <input
//               type="number"
//               value={datos.idCategoria}
//               onChange={(e) => setDatos({ ...datos, idCategoria: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label>Categoría</label>
//             <select
//               value={datos.categoria}
//               onChange={(e) => setDatos({ ...datos, categoria: e.target.value })}
//               required
//             >
//               <option value="">-- escoge --</option>
//               <option value="2">Categoría 2</option>
//               <option value="3">Categoría 3</option>
//               <option value="4">Categoría 4</option>
//               <option value="5">Categoría 5</option>
//             </select>
//           </div>

//           <div>
//             <label>Nombre</label>
//             <input
//               type="text"
//               value={datos.nombre}
//               onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label>Apellido</label>
//             <input
//               type="text"
//               value={datos.apellido}
//               onChange={(e) => setDatos({ ...datos, apellido: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label>Celular</label>
//             <input
//               type="number"
//               value={datos.celular}
//               onChange={(e) => setDatos({ ...datos, celular: e.target.value })}
//               required
//             />
//           </div>

//           <button type="submit" className="btn-registrar">
//             {initialValues.index !== null ? "Actualizar" : "Registrar"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
