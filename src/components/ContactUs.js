import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="contact">
        <div className="row">
          <div className="columns contact-details">
            <h1>Contact us</h1>
            <br></br>
            <p className="address">
              <br></br>
              <span>{webData.name}</span>
              <br></br>
              <span>{webData.address}</span>
              <br></br>
              <span>{webData.website}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}