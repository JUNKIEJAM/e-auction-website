import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Testimonials from './components/Testimonials';
import Upcoming from './components/Upcoming';
import Upload from './components/Upload';
import Results from './components/Results';
import Contact from './components/Contact';
import React,{useState} from 'react';
import AddArticle from './components/AddArticle';
import UserProfile from './components/UserProfile';

function App() {

  const [mode, setMode]=useState('light')
  const [alert,setAlert]=useState(null)
 
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(4, 39, 50)';
    /*    showAlert("Dark Mode has been Enabled","success")
        
        setInterval(()=>{
          document.title='TextManipulator - Dark Mode'
        },2000)*/
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
       
  /*      setInterval(()=>{
          document.title='TextManipulator - Light Mode'
        },2000)*/
    }
};


  return (
    <>
      
<Router>
  <Navbar mode={mode} toggleMode={toggleMode} />

  <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About mode={mode} />} />
    <Route path="/contact" element={<Contact mode={mode} />} />
    <Route path="/login" element={<Login mode={mode} />} />
    <Route path="/signup" element={<Signup mode={mode} />} />
    <Route path="/upcoming" element={<Upcoming mode={mode}/>} />
    <Route path="/test" element={<Testimonials />} />
    <Route path="/upload" element={<Upload mode={mode} />} />

    <Route path="/results" element={<Results />} />
    <Route path="/addarticle" element={<AddArticle />} />
    <Route path="/userprofile" element={<UserProfile />} />
    </Routes>
    </>
  </Router>  
  
  
    </>
  );
}

export default App;