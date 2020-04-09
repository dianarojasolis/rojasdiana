import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link
  
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Home
          </Link>
          <Link to="/about"className="btn btn-dark">
            About
          </Link>
          <Link to="/projects"className="btn btn-dark">
            Projects
          </Link>
          <Link to="/contact"className="btn btn-dark">
            Contact
          </Link>
        </div>
        <hr />
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
