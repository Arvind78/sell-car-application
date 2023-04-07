import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
const App = () => {
    return (
        <div className='app'>
        <div  className="nav-section">
            <Navbar/>
        </div>
        <div className="router-section">
            <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/signup'element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
        </div>
    )
}

export default App
