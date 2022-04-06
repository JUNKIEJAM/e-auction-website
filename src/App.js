import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Switch,Routes } from 'react-router-dom'
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Testimonials from './components/Testimonials';
import Upcoming from './components/Upcoming';
import Upload from './components/Upload';
import Results from './components/Results';

function App() {
  return (
    <>
      
<Router>
  <Navbar />

  <>
    <Routes>
  <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/upcoming" element={<Upcoming />} />
    <Route path="/test" element={<Testimonials />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="/results" element={<Results />} />
    </Routes>
    </>
  </Router>  
  
  
    </>
  );
}

export default App;
