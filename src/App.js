import React from 'react';
import './App.css';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Banner from './Banner/banner';
import About from './About/about';
import Work from './Work/work';
import Uses from './Uses/uses';
import Contact from './Contact/contact';
import AboutMe from './About/aboutMe';
import Portfolio from './Portfolio/portfolio';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar name="Chelsea Jan" />
        <Switch>
          {/* route allows you to define the path that is needed to render the compnonets listed */}
        <Route exact path='/' render={props =>
          <div>
           <Banner greeting="Hi there!" name="Chelsea" title="I currently work at Illumina, improving human health by unlocking the power of the genome." />
            <About />
            <Work />
            <Contact />
          </div>
        } />
          <Route path="/aboutme" component={AboutMe} />
          <Route exact path='/uses' render={Uses} />
          <Route exact path='/portfolio' render={Portfolio} />

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
