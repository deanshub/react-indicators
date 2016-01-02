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

  calcPath(radius){
    let angleFromVal = this.props.value * 3.6;
    let cx=radius,cy=radius;
    let startAngle=0,
      endAngle=angleFromVal-90;

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
    var radius = 50;
    return (
      <svg width="100%" height="70%" viewBox="0 0 100 100">
        <circle cx={radius} cy={radius} r={radius} fill={this.props.color} opacity="0.3" />
        {this.calcPath(radius)}
      </svg>
    );
  }
}
