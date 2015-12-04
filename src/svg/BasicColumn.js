import React, { Component, PropTypes } from 'react';

export class BasicColumn extends Component {
  static propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
  };
  static defaultProps = {
    value: 0,
    color: 'black',
    duration:1000,
    minimum:0,
    maximum:100,
  };

  constructor(props) {
    super(props);
    this.state = {
      from:props.value,
      to:props.value,
      value:props.value,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      from: this.state.value,
      to: nextProps.value,
      progress:0
    });
    cancelAnimationFrame(this.raf);
    this.startTime = undefined;
    this.animate();
  }

  animate() {
      this.raf = requestAnimationFrame((timePassed) => {
          if (!this.startTime) {
              this.startTime = timePassed;
          }
          let progress = Math.min((timePassed - this.startTime) / this.props.duration, 1);
          progress = Math.round(progress * 100);
          this.setState({progress: progress});
          if (progress >= 100) {
              this.setState({value:this.state.to});
              return false;
          }
          this.reRenderAnimation();
          this.animate();
      });
  }

  reRenderAnimation(){
    if ((this.state.progress!==undefined) && (this.state.progress<100)){
      this.setState({
        value: this.state.from + ((this.state.to - this.state.from)/100)*this.state.progress,
      });
    }
  }

  generateRect(){
    let times=6;
    let arr = Array.apply(null, Array(times)).map(function(item, index){
      return this.props.maximum - ((this.props.maximum - this.props.minimum) / (times-1)) * index;
    }.bind(this));
    return (
      <g>
        <rect x="46%" y="5%" width="8%" height="80%" fill="url(#grad1)" />
        {arr.map(function(item,index){
          let shouldBeOpacitated = item > Math.floor(this.state.value);
          let currentY = 5 + (index * 96/times);
          return (
            <g key={index}>
            <line x1="55%" y1={currentY + '%'} x2="56%" y2={currentY + '%'} style={{stroke:this.props.color,opacity:(shouldBeOpacitated)?0.1:1, strokeWidth:2}} />
            <text textAnchor="start" x="57%" y={currentY + '%'} width="5%" height="10%" fill={this.props.color} fontSize="1em" style={{alignmentBaseline: 'central',opacity:(shouldBeOpacitated)?0.1:1}}>{Math.floor(item)}</text>
            </g>
          )
        }.bind(this))}
      </g>
    );
  }

  render(){
    let range = this.props.maximum - this.props.minimum;
    let scale = range/100;
    let scaledValue = this.state.value/scale;
    return (
      <svg width="100%" height="90%" style={{margin:'auto', display:'block'}}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={100-scaledValue + '%'} stopColor={this.props.color} stopOpacity={0.1} />
            <stop offset={100-scaledValue + '%'} stopColor={this.props.color} stopOpacity={1} />
            <stop offset={scaledValue + '%'} stopColor={this.props.color} stopOpacity={1} />
          </linearGradient>
        </defs>
        {this.generateRect()}
        <text textAnchor="middle" x="50%" y="95%" width="100%" height="20%" fill={this.props.color} fontSize="2em">{Math.floor(this.state.value)}</text>
      </svg>
    );
  }
}
