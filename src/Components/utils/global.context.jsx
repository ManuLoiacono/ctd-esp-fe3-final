import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from './reducer';
import axios from 'axios';

export const initialState = {
  list: [],
  favs: [],
  theme: true
}
export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const valor = true;

  const [state, dispatch] = useReducer(reducer, initialState);
  // const {list, favs, theme} =

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTIST', payload: res.data}))
  })


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useCharContext = () => useContext(ContextGlobal);