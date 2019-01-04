import React, { Component } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Photos from './components/Photos'
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        {/* <About resumeData={resumeData}/> */}
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Photos />
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;