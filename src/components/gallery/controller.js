import React,{Component} from 'react'

class Controller extends Component{
  handleClick(e){
    if(this.props.arrange.isCenter){
      this.props.reverse()
    }else{
      this.props.center()
    }
    e.preventDefault()
  }
  render(){
    let navClassName = "controller"
    navClassName += this.props.arrange.isCenter ? ' is-center' : ''
    navClassName += this.props.arrange.isReverse ? ' is-reverse' : ''
    return (
      <span className={navClassName} onClick={this.handleClick.bind(this)}></span>
    )
  }
}
export default Controller