import React from 'react'
import { Link ,useNavigate} from "react-router-dom";

function Navbar() {
  
let navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div >
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
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
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
        </li>
      </ul>
     
      {!localStorage.getItem('token')?<form className="d-flex ml-auto">

      <Link className="btn btn-primary mx-2" to="/login" role="button">Log In</Link>

      <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign Up</Link>

      </form>:<form className="d-flex ml-auto">

<Link className="btn btn-primary mx-2" to="/login" role="button" onClick={handleLogout}>Log Out</Link>

</form>}
    </div>
  </div>
</nav>
      </div>
    )
}

export default Navbar