import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (  
      <Router>
      <Navbar/>
      <Routes>        
          <Route path="/Gym-React-App/" element={<Home />} />
          <Route path="/Gym-React-App/Contact" element={<Contact />} />        
      </Routes> 
      <Footer/>   
   </Router>
  );
}

export default App;
