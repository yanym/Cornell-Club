import React, { Component } from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Portfolio from './components/Portfolio';
import PastPortfolio from './components/PastPortfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import webData from './webData';
import Photos from './components/Photos'
import AdvisorPhotos from './components/AdvisorPhotos'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header webData={webData}/>
        <Mission webData={webData}/>
        <Portfolio webData={webData}/>
        <PastPortfolio webData={webData}/>
        <Photos />
        <AdvisorPhotos />
        <Timeline />
        <Testimonials webData={webData}/>
        <ContactUs webData={webData}/>
        <Footer webData={webData}/>
      </div>
    );
  }
}

export default App;