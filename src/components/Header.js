import React, { Component } from 'react';
import Typed from 'typed.js';

export default class Header extends Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const strings  = ['Cornell Quant Research','Deep/Statistical Learning', 'Quantitative Finance', 'Quant Medical Bio Science', '--.- ..- .- -. - .. - .- - .. ...- .'];
    // You can pass other options here, such as typing speed, back speed, etc. Check offical css.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 80,
      loop: true,
      loopCount: Infinity
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    let webData = this.props.webData;
    return (
      <React.Fragment> 
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-wrap-close" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#mission">Mission</a></li>
            <li><a className="smoothscroll" href="#portfolio">Work</a></li>
            <li><a className="smoothscroll" href="#photos">Team</a></li>
            <li><a className="smoothscroll" href="#timeline">Timeline</a></li>
            <li id='testimonials_li'><a className="smoothscroll" href="#testimonials">Words</a></li>
            <li><a className="smoothscroll" href="#cooperations">Cooperators</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

         <div className="row banner">
            <div className="banner-text">
               <div className="wrap">
                <h1 className="type-wrap">
                  <span
                    style={{ whiteSpace: 'pre' }}
                    ref={(el) => { this.el = el; }}
                  />
                </h1>
              </div>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}> 
                {webData.role} 
               </h3>
               {webData.roleDescription}
               <hr/>
               <ul className="social">
                  {
                    webData.socialLinks && webData.socialLinks.map(item =>{
                      return(
                        <li key={item.name}>
                          <a href={item.url} target="_blank"><i className={item.className}></i></a>
                        </li>
                      )
                    })
                  }
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#mission" >
              <i className="icon-down-circle" ></i>
            </a>
         </p>
      </header>
      </React.Fragment>
    );
  }
}