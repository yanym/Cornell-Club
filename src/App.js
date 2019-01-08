import React, { Component } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import CurPortfolio from './components/cur_Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import webData from './webData';
import Photos from './components/Photos'
import GG from './components/gallery/gallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header webData={webData}/>
        <Resume webData={webData}/>
        <Portfolio webData={webData}/>
        <CurPortfolio webData={webData}/>
        <Photos />
        <Testimonials webData={webData}/>
        <ContactUs webData={webData}/>
        <Footer webData={webData}/>
        {/* <GG /> */}
      </div>
    );
  }
}

export default App;