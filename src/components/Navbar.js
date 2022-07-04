import React from 'react'
import { Link ,useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

function Navbar(props) {
  
let navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div >
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TheAuction</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
      </ul>
     
      {!localStorage.getItem('token')?<form className="d-flex ml-auto">

      <Link className="btn btn-primary mx-2" to="/login" role="button">Log In</Link>

      <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign Up</Link>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
  </div>


      </form>:<form className="d-flex ml-auto">

     
          <a className="nav-link active" aria-current="page" href="/">Hello User !</a>
        
<Link className="btn btn-primary mx-2" to="/login" role="button" onClick={handleLogout}>Log Out</Link>

<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
 
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
  
  </div>

</form>}
    </div>
  </div>
</nav>
      </div>
    )
}

Navbar.propTypes={title: PropTypes.string}

Navbar.defaultProps={

    title:'Set Title here',
    aboutText:'About Text here'
}

export default Navbar

