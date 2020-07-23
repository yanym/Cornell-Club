import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <footer style= {{ background: '#fafbff' }}>
      <div  className="row">
        <div className="twelve columns">
          
        </div>
        
        <div>
        <a >&copy;</a>2020 San Marino Math Team&nbsp;|&nbsp; All right reserved.
         <br></br>
         San Marino High School, San Marino, CA
        </div>
      </div>
    </footer>
    );
  }
}