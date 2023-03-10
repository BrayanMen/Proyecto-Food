import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nameSearch } from "../../Redux/Actions/Action";
import './SearchBar.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
  };

  function handleSubmit(e){
    e.preventDefault();
    dispatch(nameSearch(name));
    setName(" ");
  }

  return (
    <div className='search'>
      <input className='input' type="text" placeholder='Buscar Receta...' onChange={(e) => handleInputChange(e)}/>
      <button className='button' type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
  )
}
