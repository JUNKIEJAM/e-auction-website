import React from 'react'


const Login = () => {

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const response=await fetch("http://localhost/api/auth/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
               
            }
        });

        const json=await response.json()
        console.log(json);

    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" />
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login