import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {

 
const [credentials,setCredentials]=useState({email:"",
password:""});

let navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const response=await fetch("http://localhost:5000/api/auth/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
               
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
        });

        const json=await response.json()
        console.log(json);

        if(json.success){
localStorage.setItem('token',json.authToken);
navigate('/');

        }
        else{
          alert("Invalid Credentials")
        }

    }
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
    }

/*
  return (
    <div className="container mt-3">
      <h1>Log In to Bid !</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
    
  </div>
  <div className="form-outline mb-4">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )*/

  return(
    <div className="container my-3">
    <div className="sidenav">
    <div className="login-main-text">
       <h2>Application Login Page</h2>
       <p>Login or register from here to access.</p>
    </div>
 </div>

 <div className="main">
    <div className="col-md-6 col-sm-12">
       <div className="login-form">
       <form onSubmit={handleSubmit}>
             <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" placeholder="User Name" />
             </div>

             <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" />
             </div>
             <button type="submit" className="btn btn-black mx-2 my-2">Login</button>
           
          </form>
             <h9>Do not have an account ? Register below</h9>
            <Link className="btn btn-primary mx-2" to="/signup" role="button">Sign Up</Link>
       </div>
    </div>
 </div>
 </div>
  )
}


export default Login
/*
<form onSubmit={handleSubmit}>
 
  <div className="form-outline mb-4">
    <input type="email" value={credentials.email} onChange={onChange} id="email" name="email" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

 
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

  <!-- Register buttons -->
  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>*/