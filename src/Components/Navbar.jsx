import React from 'react'
import { Link } from "react-router-dom"
import { useCharContext } from './utils/global.context';
import { useState, useEffect } from 'react'
import "../index.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useCharContext()
  // console.log("theme: ", state.theme)

  const [theme, setTheme] = useState("light")

  const themeMode = () => {

    const Theme2 = (theme === 'dark' ? 'light' : 'dark')
    setTheme(Theme2)
    dispatch({type: 'CHANGE_THEME', payload: Theme2})

  }
  
    useEffect(() => {
    const back = document.getElementById('App');
    const title = document.getElementById('h1');
    const nav = document.getElementById('nav');
    const themeButton = document.getElementById('buttonTheme');
    const footer = document.getElementById('footer');
    
    back.style.backgroundColor = theme === 'dark' ? '#2c3e50' : 'white';
    title.style.color = theme === 'dark' ? 'white' : 'black';
    nav.style.backgroundColor = theme === 'dark'? '#34495e' : '#3498db'
    themeButton.style.backgroundColor = theme === 'dark'? '#3498db' : '#34495e'
    footer.style.backgroundColor = theme === 'dark'? '#34495e' : '#3498db'
  }, [theme]);
    


  
  return (
    <div id="nav">
      <nav>
        <div className="ul-Button">
          <ul>
            <li>
              <Link to="/home" >Home</Link>
            </li>
            <li>
              <Link to="/contact" >Contact</Link>
            </li>
            <li>
              <Link to="/favs" >Favs</Link>
            </li>
          </ul>
          <button id="buttonTheme" onClick={(themeMode)}>{(state.theme === 'dark') ? '☀️' : '🌙'}</button>
        </div>
        
      </nav>
      
    </div>
    
  )
}

export default Navbar