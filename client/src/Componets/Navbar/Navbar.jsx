import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getRecipes } from '../../Redux/Actions/Action';
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import Logo1 from '../../Assets/Logo1.mp4'

export default function Navbar() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <div>
      <nav>
        <ul className='ulNav'>
        <div className='vidDiv'>
          <video autoPlay muted className='vid'>
            <source src={Logo1} type="video/mp4" />
          </video>
        </div>
          <li className='liButtom1'>
            <Link to='/home' onClick={(e)=>handleClick(e)}>
              <button className='liButtom2' >Refresh</button>
            </Link>
          </li>
          <li className='liNav'>
            <SearchBar />
          </li>
          <li className='liButtom1'>
            {/* <Link to='/recipe'>
              <button className='liButtom2'>Crear Receta</button>
            </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}
