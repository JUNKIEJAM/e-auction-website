import React from 'react';
import test from './assets/test.jpeg'
import auction1 from './assets/auction.png'


export const Home = () => {

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

  
        const mystyle = {
            backgroundColor: "white",
            width:'100%',
            height:'500px',
           };
  
  return (

   <div className="container my-3">
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={auction1} className="d-block w-100" style={mystyle} alt="..." />
    </div>
    <div className="carousel-item">
    <img src={test} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={test} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  
  )
}