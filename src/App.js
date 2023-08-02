import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Dashboard from './Dashboard'
import  About  from './About'
 const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard/:name" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App