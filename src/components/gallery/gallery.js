import React,{Component} from 'react'
import ImgsData from './imgsdata.json'
import Image from './image'
import Controller from './controller'
import './gallery.less'

// 获取图片数组相关信息，增加 URL
let ImgInfos = ImgsData.map((img)=>{
 return Object.assign({},
    img,
    {url: require(`../../../public/images/imgs/${img.filename}`)}
  )
})


let getRandom = (min,max) => {
  return Math.floor(Math.random() * (max - min) + min) 
}
// 获取-30~30的随机数字
let getRandomDeg = () => {
  return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30)) 
}


/**
 * 整个 stage 分为左分区、右分区、上分区以及中间展示的 figure
 * 左右分区的 y 方向取值范围相同，因此设置不同的水平方向取值返回
 * 上分区另设自己的取值范围
 */
class Gallery extends Component{
  constructor(props){
    super(props)
      //初始化 figure 的位置
      this.constantPos = {
        //中间展示 figure
        centerPos:{
          left: 0,
          top: 0
        },
        //水平方向取值范围
        horizontalRange:{
           leftSectionX: [0,0], //左分区figure 的 x(水平)方向取值范围
           rightSectionX: [0,0], //右分区figure 的 x(水平)方向取值范围
           y: [0,0] // y 方向取值范围
        },
        //垂直方向取值范围
        verticalRange: {
          x: [0,0],
          topSectionY: [0,0]
        }
      }
      this.state = {
        //  存储每个 figure 的位置
        figureArrangeArr:[
          /*
          {
            pos:{
              left: 0,
              top: 0
            },
            rotate: 0,
            isReverse: false, // 是否翻转
            isCenter: false // 是否居中
          }
          */
        ]
      }
    }
    /**
     * 图片居中
     * @param 需要居中图片的 index 值
     * @return 返回一个待执行函数
     */
     putFigureCenter(index){
       return function(){
        this.reArrangFigure(index)
       }.bind(this)
     }

    /**
     * 翻转图片
     * @param  index 需要翻转图片的 index 值 
     * 将该图片 isReverse 取反后触发 setState 进行重新渲染
     * @return 返回一个待执行函数
     */
    reverseFigure(index){
      return function(){
        let figureArrangeArr = this.state.figureArrangeArr
        figureArrangeArr[index].isReverse = !figureArrangeArr[index].isReverse
        this.setState({
          figureArrangeArr: figureArrangeArr
        })
      }.bind(this)
    }
    // 重新排布图片
    reArrangFigure(centerIndex){
      let constantPos = this.constantPos,
          centerPos = constantPos.centerPos,
          horizontalRange = constantPos.horizontalRange,
          verticalRange = constantPos.verticalRange,
          leftSectionX = horizontalRange.leftSectionX,
          rightSectionX = horizontalRange.rightSectionX
      let figureArrangeArr = this.state.figureArrangeArr,
          centerFigure = figureArrangeArr.splice(centerIndex,1)
          
      // 居中图片
      centerFigure = {
        pos: centerPos,
        rotate: 0,
        isReverse: false,
        isCenter: true
      }
      // 上部区域图片
      let topArrNum = Math.floor(Math.random() * 2 ), // 上部图片数量 0~1
          topIndex = Math.floor(Math.random()*(figureArrangeArr.length - topArrNum)), // 上部图片起始 index
          figureTopArr = figureArrangeArr.splice(topIndex, topArrNum)
          
      figureTopArr.forEach((img,index)=>{
        figureTopArr[index] = {
          pos: {
            left: getRandom(verticalRange.x[0],verticalRange.x[1]),
            top: getRandom(verticalRange.topSectionY[0],verticalRange.topSectionY[1])
          },
          rotate: getRandomDeg,
          isReverse: false,
          isCenter: false
        }
      })
      // 左右两边图片
      for(let i = 0, j = figureArrangeArr.length, k = j/2; i < j; i++){
        let LORSectionX = null
        if( i < k){
          LORSectionX = leftSectionX
        }else{
          LORSectionX = rightSectionX
        }
        figureArrangeArr[i] = {
          pos:{
            left: getRandom(LORSectionX[0],LORSectionX[1]),
            top: getRandom(horizontalRange.y[0],horizontalRange.y[1])
          },
          rotate: getRandomDeg(),
          isReverse: false,
          isCenter: false
        }
      }
      if(figureTopArr && figureTopArr[0]){
        figureArrangeArr.splice(topIndex,0,figureTopArr[0])
      }
      figureArrangeArr.splice(centerIndex,0,centerFigure)
      this.setState({
        figureArrangeArr: figureArrangeArr
      })
    }

    // 在组件初次渲染之后触发，计算figure位置范围
    componentDidMount(){
      // 获取 stage 的宽高
      let stage = document.getElementById('stage'),
          stageWidth = stage.scrollWidth,
          stageHeight = stage.scrollHeight,
          halfStageWidth = Math.ceil(stageWidth/2),
          halfStageHeight = Math.ceil(stageHeight/2)
      // 获取 figure 的宽高
      let figure = document.getElementById('figure0'),
          figureWidth = figure.scrollWidth,
          figureHeight = figure.scrollHeight,
          halfFigureWidth = Math.ceil(figureWidth/2),
          halfFigureHeight = Math.ceil(figureHeight/2)
      this.constantPos = {
        // 中心 figure 位置
        centerPos:{
          left: halfStageWidth - halfFigureWidth,
          top: halfStageHeight - halfFigureHeight
        },
        horizontalRange:{
           leftSectionX: [-halfFigureWidth,halfStageWidth - 3 * halfFigureWidth],
           rightSectionX: [3 * halfFigureWidth + halfStageWidth, stageWidth - halfFigureWidth],
           y: [-halfFigureHeight, stageHeight - halfFigureHeight]
        },
        verticalRange: {
          x: [halfStageWidth - figureWidth, halfStageWidth],
          topSectionY: [-halfFigureHeight, halfStageHeight - 3 * halfFigureHeight]
      }
    }
    this.reArrangFigure(0)
  }
  render(){
    let navigators = []
    let imgFigures = []
    ImgInfos.forEach(function(imgInfo,index){
      if(!this.state.figureArrangeArr[index]){
        this.state.figureArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          },
          rotate: 0,
          isReverse: false,
          isCenter: false
        }
      }
      imgFigures.push(<Image data={imgInfo} key={index} id={"figure"+index}
                      arrange={this.state.figureArrangeArr[index]}
                      reverse={this.reverseFigure(index)}
                      center={this.putFigureCenter(index)}/>)
      navigators.push(<Controller key={index} 
                      arrange={this.state.figureArrangeArr[index]}
                      reverse={this.reverseFigure(index)}
                      center={this.putFigureCenter(index)}/>)
  }.bind(this))
    return(
      <div className="stage" id="stage">
        <div className="img-container">
          {imgFigures}
        </div>
        <nav className="img-nav">
          {navigators}
        </nav>
      </div>
    )
  }
}
export default Gallery