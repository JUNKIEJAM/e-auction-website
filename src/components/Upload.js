import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Upload=()=> {

  let navigate=useNavigate();


  const [title,setTitle]=useState('');
  const [article,setArticle]=useState('');
  const [authorname,setAuthorName]=useState('');
  const [price,setPrice]=useState('');
  const [fileName,setFileName]=useState('');

  const onChangeFile=e=>{
    setFileName(e.target.files[0]);
  }

const changeOnClick=(e)=>{

  e.preventDefault();

  const formData=new FormData();

  formData.append('title',title);
  formData.append('article',article);
  formData.append('authorname',authorname);
  formData.append('price',price);
  formData.append('articleImage',fileName);


  /*const articles={
  title,
  article,
  authorname,
  price
}*/

axios
.post("http://localhost:5000/articles/add",formData)
.then(res=>console.log(res.data))
.catch(err=>{
  console.log(err.response.data);
})

navigate('/upcoming');
  }



/*
const changeOnClick=async (e)=>{

  e.preventDefault();
 
  const response=await fetch("http://localhost:5000/articles/add",{
           
            method:'POST',
            headers:{
                'Content-Type':'application/json'
               
            },
            body: JSON.stringify({ title,
              article,
              authorname,
            price,
          })
          });
}*/
        


  return (

    <UploadContainer>
   <div className="container my-3">
  <h1>Upload your Article</h1>
 
 <br></br>
 <br></br>

<div className="container mx-3">
 <form onSubmit={changeOnClick} encType="multipart/form-data">
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
  
  <div className="mb-3">
    <label htmlFor="article">Price</label>
    <input type="number" onChange={e=> setPrice(e.target.value)} className="form-control" rows="3" placeholder="Base Price" />
  </div>


  <div className="mb-3">
    <label htmlFor="file">Choose File</label>
    <input type="file" filename="articleImage" className="form-control-file" onChange={onChangeFile}  rows="3" placeholder="Base Price" />
  </div>

  
  <button type="submit" className="btn btn-primary">Jump into the Auction</button>
</form>
</div>
<br></br>
<br></br>

   
   </div>

  
   </UploadContainer>
 
  )
}

export default Upload

const UploadContainer=styled.div`

margin: 3rem auto;
padding: 4 rem;
width: 31.25rem;
h1{
  font-weight:900;
  color: blue;
}

.btn-primary{
  margin-top: 2rem;
  
  border: none;
  &:hover {
    background: green;
  }
}
`;


