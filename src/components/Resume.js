import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="resume">
         <div className="row education">
            <div className="twelve columns">
              { 
                webData.education && webData.education.map((item)=>{
                  return(
                    <div key={item.MonthOfPassing} className="row item">
                       <div align='center' className="twelve columns">
                       <h1><span>{item.UniversityName}</span></h1>
                          <br></br>
                          <p className="info">
                            {item.specialization}
                          </p>
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