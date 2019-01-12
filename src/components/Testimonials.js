import React, { Component } from 'react';

export default class Testimonials extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    webData.testimonials && webData.testimonials.map((item)=>{
                      return(
                        <li key={item.description}>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div> 
          </div> 
        </div> 
      </section>
    );
  }
}