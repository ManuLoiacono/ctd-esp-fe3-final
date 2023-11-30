import React from 'react'

import { Link } from "react-router-dom"

import { useCharContext } from './utils/global.context';

//import {BrowserRouter, Routes, Route} from "react-router-dom"
//import Home from './Home'
//import Detail from './Detail'
//import Contact from './Contact'
//import Favs from './Favs'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state} = useCharContext()
  
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/home"><h4>Home</h4></Link>
      <Link to="/dentist/:id"><h4>Dentistas</h4></Link>
      <Link to="/contact"><h4>Contacto</h4></Link>
      <Link to="/favs"><h4>Favoritos</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme {state.them ? 'Light' : 'Dark'}</button>
    </nav>
  )
}

export default Navbar