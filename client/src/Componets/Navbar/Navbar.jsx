import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <Link to='/recipe'>
        <button>Crear Receta</button>
      </Link>
      <nav>
        
      </nav>
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </div>
  )
}
