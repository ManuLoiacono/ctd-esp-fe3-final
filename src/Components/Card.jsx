import React from "react";
import { Link } from "react-router-dom"
import { useCharContext } from "./utils/global.context";

// const Card = ({ name, username, id }) => {
const Card = ({ character }) => {
  
  const {state, dispatch} = useCharContext()
  const findFav = state.favs.find(fav => fav.id == character.id)
  
  //const findFav = true

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
    console.log(findFav);

    if(findFav){
      alert('Ya agregado')
    } else {
      dispatch({type: 'ADD_FAVS', payload: character})
    }

    // dispatch({type: 'ADD_FAVS', payload: character})
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
      
      <button onClick={addFav}>{findFav ? '🌟':'⭐'}</button>
    </div>
  );
};

export default Card;
