import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
  
} from "react-router-dom";
import  './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Logo from './img/logo512.png';




function App() {
  return (
    <Router>
      <div className="nav flex-column">
        <img className="Logo" alt="" src={Logo} />
        
       </div>
      <div className="container-fluid p-0">
        
     
        <div className="btn-group d-flex justify-content-between align-items-center">
          <Link to="/" className="btn btn-pink ">
            Inicio
          </Link>
          <Link to="/about"className="btn btn-pink">
           Sobre Mi
          </Link>
          <Link to="/projects"className="btn btn-pink">
            Proyectos
          </Link>
          <Link to="/contact"className="btn btn-pink">
            Contacto
          </Link>
        </div>
        
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          
          </Switch>
      </div>
    </Router>
  );
}

export default App;
