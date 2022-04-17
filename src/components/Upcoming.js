import React,{useState,useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link} from 'react-router-dom';



function Upcoming() {
   
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
      axios
      .get('/articles/')
      .then(res=>setPosts(res.data))
      .catch(error=>console.log(error))
    })


    const cardstyle={
width: '100%',
height: 350
    
    
    }

    return (

      <CardContainer>
  
     <div className="container my-3">
    <h1>Upcoming Auctions </h1>
   
   <br></br>
   <br></br>
  
       {posts.map((article,key)=>(
     
     <div className="container" key={key}>
     
       <div className="card">
      
       <img src={`/uploads/${article.articleImage}`} style={cardstyle} className="card-img-top" alt={article.title} />
      
       <div class="card-body">
         <Link to={{
           pathname:`/upcoming/${article._id}`
         }}>

     <h5 class="card-title"><h1>{article.title}</h1></h5>
        
         </Link>

         <p class="card-text">Description: {article.article}</p>
         <span>Uploaded by: <b>{article.authorname}</b></span>
         <p class="card-text"> Base Price: <b>{article.price}</b> </p>
         <br></br>
         <br></br>

         <div className="container">            
         <Link to={`/submitbid/${article._id}`}  className="btn btn-primary" style={{float: "right"}}>Give your Bid</Link>
          
        </div>

        
         </div>
  </div>
  <br></br>
  <br></br>
  </div>
  
       ))}
  
     </div>

   
     </CardContainer>


    )    

  
}


export default Upcoming


const CardContainer=styled.div`

margin: 3rem auto;


h1{
  font-weight:900;
  color: blue;
}

.btn{
  
}

.btn-primary{
  margin-top: 2rem;
  margin-right: 0;

  border: none;
  &:hover {
    background: green;
  }
}

.card-text{
  font-weight:900; 
}

`;
