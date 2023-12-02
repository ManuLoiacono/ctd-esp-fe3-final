import React from "react";
import { useState } from "react"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [persona, setPersona] = useState({
    nombre: "",
    email: ""
  })

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();
    if (persona.nombre.length > 5) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };



  return (
    <div>
      <form onSubmit={handleSumbit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      >
          <label>Nombre completo: </label>
          <input type="text" value={persona.nombre} onChange={(event) => 
            setPersona({...persona, nombre: event.target.value})} 
            />

          <label>Email: </label>
          <input type="email" value={persona.email} onChange={(event) => 
            setPersona({...persona, email: event.target.value})} 
            />

          <button>Enviar</button>
      </form>

      {show && alert(
        `Gracias ${persona.nombre}, te contactaremos cuando antes vía mail.`
      )}
      {error && (
        <h5 style={{ color: "red" }}>
        Por favor chequea que la información sea correcta
      </h5>
      )}
    </div>
  );
};

export default Form;
