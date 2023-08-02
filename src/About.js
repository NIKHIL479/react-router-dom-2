import React from 'react'
import {Link,useLocation} from 'react-router-dom'
export const About = () => {
    let {search}=useLocation()
    var o= new URLSearchParams(search)
    return (
        <div><center>welcome to about<br/>

        <h1>{o.get('name')}</h1>
        <h1>{o.get('id')}</h1>
        <br/>
        <Link to="/"> <li>back</li> </Link>
            </center></div>
      )
}
export default About