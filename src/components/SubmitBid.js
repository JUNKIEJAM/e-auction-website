import React,{useState,useEffect} from 'react';
import axios from 'axios';

import styled from 'styled-components';



const SubmitBid=(props)=> {



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


axios
.put(`articles/update/${props.match.params.id}`,formData)
.then(res=>console.log(res.data))
.catch(err=>{
  console.log(err.response.data);
})
}

useEffect(()=>{

  axios
.get(`/articles/${props.match.params.id}`)
.then((res)=>[
  setTitle(res.data.title),
  setArticle(res.data.article),
  setAuthorName(res.data.authorname),
  setPrice(res.data.price),
  setFileName(res.data.articleImage),

])
.catch(err=>{
  console.log(err.response.data);
})

},[`${props.match.params.id}`]);


  return (

    <SubmitBidContainer>
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

  
   </SubmitBidContainer>
 
  )
}

export default SubmitBid

const SubmitBidContainer=styled.div`

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


