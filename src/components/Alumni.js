import React, { Component } from 'react';
import { Carousel } from 'antd';

export default class Alumni extends Component {
  render() {
    return (
      <section id="alumni" style={{ background:'white' }}>
        <div className="row" >
          <div className="twelve columns" >
          <h1>Alumni</h1>
          <Carousel autoplay>
            <div><h3>Jiamin Zeng, MEng 2017 student at ECE<br/>
                    SDE at Oracle, Silicon Valley</h3></div>
            <div><h3>Haoyuan Zheng, MEng 2017 student at ECE<br/>
                    SDE at Google, Sunnyvale</h3></div>
            <div><h3>Rongguang Wang, MEng 2017 student at ECE<br/>
                    PhD student at ECE of University of Pennsylvania</h3></div>
          </Carousel>
          </div>
        </div>
      </section>
    );
  }
}