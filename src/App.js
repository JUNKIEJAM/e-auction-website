import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Switch,Routes } from 'react-router-dom'
import { Home } from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      
<Router>
  <Navbar />

  <div className="container">
    <Routes>
  <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  </Router>  
  
  
    </>
  );
}

export default App;
