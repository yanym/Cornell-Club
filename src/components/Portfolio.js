import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="portfolio" style={{ background: '#f7f8ff'}}>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Current Work</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-halves cf">
            {
              webData.portfolio && webData.portfolio.map((item)=>{
                return( 
                  <div className="columns portfolio-item " key={item.imgurl}>
                    <div className="center_smalldevice item-wrap" style={{ background: '#d4ffcc'}}>
                      <a href={"https://" + item.url }>
                      {/* <a href="#modal-02"> */}
                        <img src={`${item.imgurl}`} className="item-img" alt=''/>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
    );
  }
}