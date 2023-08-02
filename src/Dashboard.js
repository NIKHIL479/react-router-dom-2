import React from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
export const Dashboard = () => {
  var n="nikhil";
  const navigate=useNavigate()
  
  var params=useParams()
 

  return (
    <div><center
    >welcome to dashboard<br/>
    <h1>{params.name}</h1>
  
    <br/>
    <Link to="/"> <li>back</li> </Link>
    <Link to={`/about?name=${n}&&id=${79}`}>about</Link>
    <button onClick={()=> navigate(`/about?name="nikil"`)}>about 1</button>
    <br/>
  
   
        </center></div>
  )
}
export default Dashboard