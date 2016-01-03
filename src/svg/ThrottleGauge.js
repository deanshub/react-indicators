import React, { Component, PropTypes } from 'react';

export class ThrottleGauge extends Component {
  static propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
  };
  static defaultProps = {
    value: 0,
    color: 'black',
  };

  xyStop(radius, needlePortion){
    let angleFromVal = this.props.value * 3.6;

    if ((angleFromVal<=0) || (this.props.value>=100)){
      angleFromVal = 0;
    }
    
    let startAngle=0, endAngle=angleFromVal- 90;
    let x = radius + ((radius*Math.cos(Math.PI*endAngle/180)) * needlePortion);
    let y = radius + ((radius * Math.sin(Math.PI*endAngle/180))* needlePortion);
    return {x, y};
  }

  calcPath(radius){
    let angleFromVal = this.props.value * 3.6;
    let cx=radius,cy=radius;
    let startAngle=0, endAngle=angleFromVal-90;

    let fullCircle = angleFromVal>=360;
    if (angleFromVal<=0){
    }else if (fullCircle){
      return (
        <circle cx={cx} cy={cy} r={radius} fill={this.props.color} />
      );
    }else{
      let inside=((angleFromVal===360)||(angleFromVal%360>180))?'1':'0';

      let x2 = radius*Math.cos(Math.PI*endAngle/180);
      let y2 = radius+(radius*Math.sin(Math.PI*endAngle/180));

      var pathD = 'M'+cx+','+cy+' l0,-' + radius + ' a'+radius+','+radius+' 0 '+inside+',1 ' + x2 + ',' + y2 + ' L' + cx + ',' + cy + ' l0,-'+radius; //1 means clockwise
      return (
        <path d={pathD} fill={this.props.color}/>
      );
    }
  }

  render(){
    let radius = 50;
    let needlePortion = 0.8;
    let {x,y} = this.xyStop(radius, needlePortion);
    return (
      <svg width="100%" height="70%" viewBox="0 0 100 100">
        <circle cx={radius} cy={radius} r={radius} fill={this.props.color} opacity="0.3" />
        {this.calcPath(radius)}
        <circle cx={radius} cy={radius} r={radius-5} fill="white" />
        <circle cx={radius} cy={radius} r={3} fill={this.props.color} />
        <line x1={radius} y1={radius} x2={x} y2={y} style={{stroke:this.props.color,strokeWidth:1}}/>
      </svg>
    );
  }
}
