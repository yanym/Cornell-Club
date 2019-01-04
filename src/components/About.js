import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>
            <div className="seven columns main-col">
               <h2>Who we are</h2>
               <p>
               {resumeData.aboutme}
               </p>
            </div>
         </div>
      </section>
    );
  }
}