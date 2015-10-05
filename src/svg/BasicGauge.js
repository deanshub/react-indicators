import React, { Component, PropTypes } from 'react';

export class BasicGauge extends Component {
  static propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
  };
  static defaultProps = {
    value: 0,
    color: 'black',
  };
  constructor(props) {
    super(props);
    this.state={
      value: this.props.value,
      color: this.props.color,
    };
  }

  changeVal(newVal){
    this.setState({
      value: newVal
    });
  }

  calcPath(radius){
    let angleFromVal = this.state.value * 3.6;
    let cx=110,cy=100;
    let startAngle=0,
      endAngle=angleFromVal-90;

    let x1=cx;
    let y1=cy-radius;
    let inside=angleFromVal%360>180?"1":"0";
    // let x2 = parseInt(110 + radius*Math.cos(Math.PI*startAngle/180));
    // let y2 = parseInt(100 + radius*Math.sin(Math.PI*startAngle/180));

    let x2 = parseInt(110 + radius*Math.cos(Math.PI*endAngle/180));
    let y2 = parseInt(100 + radius*Math.sin(Math.PI*endAngle/180));

    return "M"+cx+","+cy+"  L" + x1 + "," + y1 + " A"+radius+","+radius+" 0 "+inside+",1 " + x2 + "," + y2 + " z"; //1 means clockwise
  }

  render(){
    return (
      <svg onClick={this.changeVal.bind(this,this.state.value+2)} width="220" height="200">
        <path d={this.calcPath(90)} fill="#cccccc" />
        <circle cx="110" cy="100" r="83" fill="white" />
        <circle cx="110" cy="100" r="80" fill={this.state.color} opacity="0.3" />
        <path d={this.calcPath(80)} fill={this.state.color}/>
      </svg>
    );
  }
}
