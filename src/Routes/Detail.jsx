import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [char, setChar] = useState({})
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;

  useEffect(() => {
    const fetchChar = async () => {
      const res = await axios(url)
      setChar(res.data)
      console.log(res.data)

    }
    fetchChar() 
  }, [])
  
  return (
    <div>
      <h1 id="h1">Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      
        <h3 id="h1">{char.name}</h3>
        <p id="h1">{char.email}</p>
        <p id="h1">{char.phone}</p>
        <p id="h1 ">{char.website}</p>
      
    </div>
    
    
  )
}

export default Detail