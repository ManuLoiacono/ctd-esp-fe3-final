import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from './reducer';
import axios from 'axios';

export const initialState = {
  list: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  theme: 'light'
}
export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTIST', payload: res.data}))
  })

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useCharContext = () => useContext(ContextGlobal);