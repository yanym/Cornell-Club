import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <footer style= {{ background: '#fafbff' }}>
      <div  className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              webData.socialLinks && webData.socialLinks.map((item)=>{
                return(
                  <li key={item.url}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div id="go-top">
          <a style={{ background: '#b41a20' }} className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"/>
          </a>
        </div>
        <div>
        <a href='https://www.linkedin.com/in/y-yan'>&copy;</a>2019 Cornell Quant Club&nbsp;|&nbsp; All right reserved.
         <br></br>
         Cornell University, Ithaca, NY
        </div>
      </div>
    </footer>
    );
  }
}