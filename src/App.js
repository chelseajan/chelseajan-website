import React from 'react';
import './App.css';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Banner from './Banner/banner';
import About from './About/about';
import Work from './Work/work';
import Uses from './Uses/uses';
import Contact from './Contact/contact';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Navbar name="Chelsea Jan" />
      <Banner greeting="Hi there!" name="Chelsea" title="I currently work at Illumina, improving human health by unlocking the power of the genome." />
      <About />
      <Work />
      <Uses />
      <Contact />
      {/* <Section id="Uses" title="Uses." />
      <Section id="Contact" title="Contact." /> */}

      <Footer />
    </div>
  );
}

export default App;
