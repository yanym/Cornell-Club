import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          {/* <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Join us
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div> */}
          <div className="row">
            <div className="columns contact-details">
            <h1>Contact us</h1>
            <br></br>
            <p className="address">
            <br></br>
            <span>{resumeData.name}</span>
                <br></br>
                <span>
                {resumeData.address}
              </span>
              <br></br>
              <span>{resumeData.website}</span>
              </p>
            </div>
          </div>
        </section>
        );
  }
}