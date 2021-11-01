import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../pictures/launchpadlogo.jpeg'


function Navbar(){

  return (
    <nav className='navbar'>
      <div className='left-nav'>
        <Link to='/'>
          <img className='logo-source' src={mainlogo}/>
        </Link>
      </div>
      <div className="right-nav">
        <Link to='/account' className='button'>account</Link>
        <Link to='/register' className='button'>sign up</Link>
      </div>
    </nav>
  )  
}

export default Navbar