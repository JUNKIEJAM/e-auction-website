import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Upcoming() {
   
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
      axios
      .get('http://localhost:5000/articles/')
      .then(res=>setPosts(res.data))
      .catch(error=>console.log(error))
    })
  
    const mystyle={
      width: 500
    }
    return (
  
     <div className="container my-3">
    <h1>Upcoming Auctions </h1>
   
   <br></br>
   <br></br>
  
       {posts.map((article,key)=>(
         <div className="container">
       <div className="card">
         <div className="card-body" style={mystyle}>
         <h5 class="card-title">{article.title}</h5>
         <p class="card-text">{article.article}</p>
         <span>{article.authorname}</span>
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
