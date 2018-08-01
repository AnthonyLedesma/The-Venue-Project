import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueNfo from './components/venuNfo';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Element name="header">
          <Header/>
        </Element>
        <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venue_info">
          <VenueNfo/>
        </Element>
        <Element name="highlight">
          <Highlight/>
        </Element>
        <Element name="pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>
        <Element name="footer">
          <Footer/>
        </Element>
        
        
        
        
        
        
        
      </div>
    );
  }
}

export default App;
