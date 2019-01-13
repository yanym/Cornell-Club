import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="contact" style={{ background: '#fafbff'}}>
        <div className="row" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="columns contact-details">
            <br></br>
            {/* h1 has before attr, which is a cute pink envelope. Remove comment below to enable it. */}
            {/* <h1></h1> */}
            <h4>Contact us</h4>
            <p className="address">
              <span>{webData.name}</span>
              <br></br>
              <span>Addr: {webData.addr}</span>
              <br></br>
              <span>Email: {webData.email}</span>
            </p>
            <br></br>
            <img src='images/2880px-Cornell_University_logo.svg.png' alt='' style={{ height:71.5 }}></img>
          </div>
        </div>
      </section>
    );
  }
}