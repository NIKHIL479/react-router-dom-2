import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <center>welcome to Home<br/><br/>
        <Link to="/dashboard/nikhil"> <li>dashboard</li> </Link>
        <Link to="/about"> <li>about</li> </Link>
        </center>


    </div>
  )
}
export default Home