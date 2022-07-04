import React from 'react';

import auction1 from './assets/auction.png'
import auction2 from './assets/auction2.jfif'
import bid from './assets/bid.png'
import read from './assets/read.png'
import write from './assets/write.png'
import { Link} from 'react-router-dom';
import articlebg from './assets/articlebg.jpg'



export const Home = () => {


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

  
        const mystyle = {
            backgroundColor: "white",
            width:'100%',
            height:'500px',
           };

           const mystyle2 = {
        
            width:'50%',
            height:'500px',
            padding: 2
           };

           const btnstyle = {
           width: '100%'
           };

           const picstyle = {
       
            backgroundColor: "white",
            width:'18rem',
            height:'10rem',
           };

         
  return (

    
   <>

   <img src={auction1} className="d-block w-100" style={mystyle} alt="..." />


<br></br>
<br></br>
<br></br>

<div className="container">
  <div className="row">

   
<div className="card" style={mystyle2}>
  <img src={bid} class="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi pariatur repudiandae ut perferendis est.</p>
    <Link type="button" className="btn btn-danger" style={btnstyle} to='/upcoming'
target='_blank' >Jump into Auction </Link>
  </div>
  </div>



<div className="card" style={mystyle2}>
  <img src={auction2} class="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia fuga fugiat debitis.</p>

   
    <Link type="button" className="btn btn-success" style={btnstyle} to='/upload'
target='_blank' >Put up for Bidding</Link>

  
  </div>
</div>

</div>
</div>
<br></br>
<br></br>
  
    
<footer className="bg-dark text-center text-white">
  
  <div className="container p-4">
    
    <section className="mb-4">
     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

   
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

   
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
  

   
    <section className="">
      <form action="">
     
        <div className="row d-flex justify-content-center">
     
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
      

          
          <div className="col-md-5 col-12">
       
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
        
          <div className="col-auto">
      
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
      
        </div>
    
      </form>
    </section>
  
    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    
    <section className="">
  
      <div className="row">
    
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
  
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
     
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
     
      </div>
     
    </section>

  </div>

  <div className="text-center p-3" >
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>

</>
  
  )
}


