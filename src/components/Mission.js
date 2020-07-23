import React, { Component } from 'react';

export default  class Mission extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="mission">
         <div className="row">
            <div className="twelve columns">
              { 
                webData.mission && webData.mission.map((item)=>{
                  return(
                    <div key={item.specialization} className="row item">
                       <div align='center' className="twelve columns">
                       <h1><span>Mission</span></h1>
                          <br></br>
                          <p className="info">
                            {item.specialization}
                          </p>
                          <a href="https://airtable.com/shrfQg0eWjQAp7qoN/"><img alt="Apply" src="images/profilepic1.jpg" ></img></a>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </section>
    );
  }
}