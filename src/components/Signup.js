import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [credentials,setCredentials]=useState({name:"",
email:"",password:"",confirmpassword:""});

let navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
      const {name,email,password}=credentials;

        const response=await fetch("http://localhost:5000/api/auth/createuser",{
           
            method:'POST',
            headers:{
                'Content-Type':'application/json'
               
            },
            body: JSON.stringify({name,email,password})
        });

        const json=await response.json()
        console.log(json);

    
localStorage.setItem('token',json.authToken);
navigate('/');

        
      

    }
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    return (
        <div className="container my-3">

            <h1>Create an Account !</h1>
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control" id="name" aria-describedby="emailHelp" onChange={onChange} name="name"  />

  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" name="email" />

  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange}  id="password" name="password" minLength={5} required/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="confirmpassword" onChange={onChange} name="confirmpassword" minLength={5} required />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Signup