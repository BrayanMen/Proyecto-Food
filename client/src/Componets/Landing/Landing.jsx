import React from 'react'
import { Link } from 'react-router-dom'
import Logo2 from '../../Assets/Logo2.mp4'
import './Landing.css'

function Landing() {
  return (
    <div>
      <video autoPlay muted className='vidLand'>
          <source src={Logo2} type="video/mp4" />
          </video>
      <Link to='/home'>
        <button className='buttonLan'>!GO, GO, GO¡</button>
      </Link>
    </div>
  )
}

export default Landing