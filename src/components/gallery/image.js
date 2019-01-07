import React,{Component} from 'react'

class Image extends Component{
  handleClick(e){
    if(this.props.arrange.isCenter){
      this.props.reverse()
    }else{
      this.props.center() 
    }
    
    e.preventDefault()
  }
  render(){
    let styleObj = {}
    if(this.props.arrange.pos){
      styleObj = this.props.arrange.pos
    }
    if(this.props.arrange.rotate){
      styleObj["transform"] = `rotate(${this.props.arrange.rotate}deg)`
    }
    if(this.props.arrange.isCenter){
      styleObj.zIndex = 11
    }
    let figureClassName = "img-figure"
    figureClassName += this.props.arrange.isReverse ? ' is-reverse' : ''
    return(
      <figure className={figureClassName} id={this.props.id}
      style={styleObj} onClick={this.handleClick.bind(this)}>
        <div className="front">
          <img src={this.props.data.url} alt={this.props.data.title} />	
          <h3 className="img-title">{this.props.data.title}</h3>
        </div>
          <div className="back" onClick={this.handleClick.bind(this)}>
            <p>
              {this.props.data.desc}
            </p>
          </div>
      </figure>
    )
  }
}
export default Image