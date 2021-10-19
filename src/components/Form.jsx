import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });
  const { nombre, numero } = data;
  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre,
      numero,
    },
  };
  const handleAdd = () => {
    dispatch(actionAdd);
  };
  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2">
        Nombre:{" "}
        <input
          name="nombre"
          value={nombre}
          onChange={handleChange}
          type="text"
          className="form-control"
          autoComplete="off"
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Número:{" "}
        <input
          name="numero"
          value={numero}
          onChange={handleChange}
          type="text"
          className="form-control"
          autoComplete="off"
        />
      </label>
      <div className="mx-1 d-grid gap-2">
        <button onClick={handleAdd} className="btn btn-info mt-2">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Form;
