import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h1>Welcome my Food-PI</h1>
      <Link to='/home'>
        <button>!GO, GO, GO¡</button>
      </Link>
    </div>
  )
}

export default Landing