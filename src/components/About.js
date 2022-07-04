import React from 'react'
import prithesh from './assets/prithesh4.jpg'
import divya from './assets/divya.jpg';
import { Link} from 'react-router-dom';
function About() {

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
    <div>
      
<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">About us page</h1>
        <p className="lead text-muted mb-0">Hello ! We hope you are having a good day</p>
      
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
    </div>
  </div>
</div>


    
<br></br>
    <br></br>
    <br></br>
    <br></br>



    <div className="row text-center">
 
    <div className="card-columns mx-auto d-flex justify-content-center col-12" >
      <div className="col-xl-5 col-sm-6 mb-5 marign:3px">
        <div className="bg-white rounded shadow-sm py-30 px-30"><img src={prithesh} alt="" width="300" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Prithesh Dwivedi</h5>
          {/* <span className="small text-uppercase text-muted"><b>2019UIT3152</b></span> */}
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

      {/* <div className="col-xl-5 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-30 px-30"><img src={divya} alt="" width="300" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Divya Agarwal</h5><span className="small text-uppercase text-muted"><b>2019UIT3156</b></span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href='/' className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div> */}
    
 

    </div>
  </div>
  </div>

    
  )
}

export default About

