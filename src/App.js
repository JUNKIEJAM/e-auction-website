import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import React,{useState,useEffect} from 'react';
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Testimonials from './components/Testimonials';
import Upcoming from './components/Upcoming';
import Upload from './components/Upload';
import Results from './components/Results';
import Contact from './components/Contact';
import axios from 'axios';
import AddArticle from './components/AddArticle';
import Article from './components/Article'
import SubmitBid from './components/SubmitBid'

function App() {

  const [posts,setPosts]=useState([]);

    useEffect(()=>{
      axios
      .get('/articles/')
      .then(res=>setPosts(res.data))
      .catch(error=>console.log(error))
    })



  return (
    <>
      
<Router>
  <Navbar />

  <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/upcoming" element={<Upcoming />} />
    <Route path="/test" element={<Testimonials />} />
    <Route path="/upload" element={<Upload />} />

    <Route path="/results" element={<Results />} />
    <Route path="/addarticle" element={<AddArticle />} />
    <Route path="/upcoming/:id" render={(props)=><Article {...props} posts={posts} />} />
    <Route path="/submitbid/:id" render={(props)=><SubmitBid {...props} posts={posts} />} />
    

    </Routes>
    </>
  </Router>  
  
  
    </>
  );
}

export default App;