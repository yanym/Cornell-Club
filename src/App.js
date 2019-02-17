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
import Alumni from './components/Alumni'
import AdvisorPhotos from './components/AdvisorPhotos'
import NewPortfolio from './components/NewPortfolio'
import NewPastPortfolio from './components/NewPastPortfolio'
import Cooperation from './components/Cooperation'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header webData={webData}/>
        <Mission webData={webData}/>
        {/* <Portfolio webData={webData}/>
        <PastPortfolio webData={webData}/> */}
        <NewPortfolio webData={webData}/>
        <NewPastPortfolio webData={webData}/>
        <Photos />
        <AdvisorPhotos />
        <Alumni />
        <Timeline />
        <Cooperation />
        <Testimonials webData={webData}/>
        <ContactUs webData={webData}/>
        <Footer webData={webData}/>
      </div>
    );
  }
}

export default App;