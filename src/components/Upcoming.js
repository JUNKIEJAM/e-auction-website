import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Upcoming() {
   
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
      axios
      .get('/articles/')
      .then(res=>setPosts(res.data))
      .catch(error=>console.log(error))
    })

    const [article,setArticle]=useState([]);
    
  
    const mystyle={
      width: 500
    }
    return (
  
     <div className="container my-3">
    <h1>Upcoming Auctions </h1>
   
   <br></br>
   <br></br>
  
       {posts.map((article,key)=>(
     
     <div className="container" key={key}>
     
       <div className="card">
      
       <img src={`/uploads/${article.articleImage}`}  style={{width:"40%"}} className="card-img-top" alt="..." />

         <div className="card-body">
        
         <h5 class="card-title"><h1>{article.title}</h1></h5>
         <p class="card-text">Subject: {article.article}</p>
      
         <span>Uploaded by: {article.authorname}</span>
         <p class="card-text">Price: {article.price}</p>
         <br></br>
         <br></br>
         <a href="/" class="btn btn-primary">Give your Bid</a>
    </div>
  </div>
  <br></br>
  <br></br>
  </div>
  
       ))}
     </div>
   
    )
}

export default Upcoming
