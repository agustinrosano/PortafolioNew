import { NavBar } from './Components/NavBar';
import { Home } from './Components/home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Footer } from './Components/footer';
import { AboutMe } from './Components/AboutMe';

import { Contacto } from './Components/Contacto';

function App() {
  return (
 
  <Router>
    <NavBar />
        <Routes>
          <Route path = "/" element = {<Home/> }/>  
          <Route path = "/about" element = {<AboutMe/> }/>                   
          <Route path = "/contac" element = {<Contacto/>}/>          
        </Routes>
      <Footer />
  </Router>    

  );
}

export default App;
