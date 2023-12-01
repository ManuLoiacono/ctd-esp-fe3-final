import React from "react";
import { Link } from "react-router-dom"
import { useCharContext } from "./utils/global.context";

// const Card = ({ name, username, id }) => {
const Card = ({ character }) => {
  
  const {dispatch} = useCharContext()

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: 'ADD_FAVS', payload: character})

  }

  return (
    <div className="card">
        
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      
      <Link to={"/dentist/" + character.id}>
        <h3>{character.name}</h3>
      </Link> 
      <p>{character.username} - {character.id}</p>
      
      <button onClick={addFav} className="favButton">Add fav</button>

    </div>
  );
};

export default Card;
