import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
Link
const Navbar = () => {
  return (
    <header>
        <div className="logo">
            Cars
        </div>
         <nav>
         <Link to='/'><a>Home</a></Link> 
         <Link to='/signup'><a>Signup</a></Link> 
         <Link to='/login'><a>Login</a></Link> 
         </nav>
    </header>
  )
}

export default Navbar