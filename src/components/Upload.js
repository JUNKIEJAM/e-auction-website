import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Upload=()=> {

  const [title,setTitle]=useState('');
  const [article,setArticle]=useState('');
  const [authorname,setAuthorName]=useState('');

 /* const changeOnClick=(e)=>{
e.preventDefault();

const articles={
  title,
  article,
  authorname
}

axios
.post("/upload/add",articles)
.then(res=>console.log(res.data))
.catch(err=>{
  console.log(err);
})
  }
*/
let navigate=useNavigate();

const changeOnClick=async (e)=>{

  e.preventDefault();
 
  const response=await fetch("http://localhost:5000/articles/add",{
           
            method:'POST',
            headers:{
                'Content-Type':'application/json'
               
            },
            body: JSON.stringify({ title,
              article,
              authorname})
          });

          navigate('/upcoming');
}

  return (

   <div className="container my-3">
  <h1>Upload your Article here </h1>
 
 <br></br>
 <br></br>

<div className="container mx-3">
 <form onSubmit={changeOnClick} /*encType="multipart/form-data"*/>
  <div className="mb-3">
    <label htmlFor="authorname">Your Name: </label>
    <input type="text" onChange={e=> setAuthorName(e.target.value)} className="form-control" placeholder="Enter your Name" />
    
  </div>

  <div className="mb-3">
    <label htmlFor="title">Title: </label>
    <input type="text"  onChange={e=> setTitle(e.target.value)} className="form-control" placeholder="Name of the Product" />
    
  </div>

  <div className="mb-3">
    <label htmlFor="article">Description</label>
    <textarea onChange={e=> setArticle(e.target.value)} className="form-control" rows="3" placeholder="Describe the Product" />
  </div>
  
  <button type="submit" className="btn btn-primary">Jump into the Auction</button>
</form>
</div>
<br></br>
<br></br>

   
   </div>
 
  )
}

export default Upload


