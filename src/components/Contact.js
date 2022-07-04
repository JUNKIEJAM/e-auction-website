import React from 'react'
import prithesh from './assets/prithesh4.jpg'
import divya from './assets/divya.jpg';

function Contact() {
  return (
    <div className="container my-4">
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

export default Contact