import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";
import Form from "./Form";
import Tabla from "./Tabla";

const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);
  const [view, setView] = useState(false);
  return (
    <div className="container mt-3">
      <button onClick={() => setView(!view)} className="btn btn-success">
        {view ? "- Cerrar formulario" : "+ Agregar contacto"}
      </button>
      {view && <Form dispatch={dispatch} />}
      <Tabla contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
