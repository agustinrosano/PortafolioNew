import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
<nav  className="navbar navbar-expand-lg bg-light  sticky-top " style={{paddingTop:'25px',paddingBotton:'25px'}}>

    <div className="container-fluid d-flex justify-content-evently " style={{fontSize:'25px'}}>
      <h1 style={{fontSize:'30px', marginRight:'30px'}} > Thomas Amado </h1>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" >
        <div className='d-flex justify-content-end'>
        <ul className="navbar-nav " style={{marginLeft:'10px'}}>
          <li>  
            <Link to='/ 'className="nav-item nav-link" style={{fontSize:"22px"}}>
                  Home
            </Link>
          </li>
          <li>  
            <Link to='/about 'className="nav-item nav-link" style={{fontSize:"22px"}}>
                 About 
            </Link>
          </li>
          <li>  
            <Link to='/contac 'className="nav-item nav-link" style={{fontSize:"22px"}}>
                 Contact
            </Link>
          </li>
       
        </ul>
        </div>
      </div>
    </div>
</nav>
  )
}
