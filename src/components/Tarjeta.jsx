// function Tarjeta({ registro, onEdit, onDelete }) {
//   const labels = {
//     categoria : "Categoría",
//     idPuntoVenta: "Id punto de venta",
//     puntoVenta: "Punto de venta",
//     base: "Base",
//     zona: "Zona",
//     otroValor: "Otro valor"
//   }
//   return (
//     <div className="registro-container">
//       {Object.entries(registro).map(([k, v]) => (
//         <div className="campo" key={k}>
//           <label>{labels[k]}</label>
//           <div className="valor">{v}</div>
//         </div>
//       ))}
//       <div className="botones">
//         <button className="btn-editar" onClick={onEdit}>Editar</button>
//         <button className="btn-eliminar" onClick={onDelete}>Eliminar</button>
//       </div>
     
//     </div>
//   );
// }

// export default Tarjeta;