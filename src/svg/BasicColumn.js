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

  render(){
    return (
      <svg width="100%" height="90%" style={{margin:'auto', display:'block'}}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={100-this.state.value + '%'} stopColor={this.props.color} stopOpacity={0.1} />
            <stop offset={100-this.state.value + '%'} stopColor={this.props.color} stopOpacity={1} />
            <stop offset={this.state.value + '%'} stopColor={this.props.color} stopOpacity={1} />
          </linearGradient>
        </defs>
        <rect x="47.5%" width="5%" height="80%" fill="url(#grad1)" />
        <text textAnchor="middle" x="50%" y="90%" width="100%" height="20%" fill={this.props.color} fontSize="2em">{Math.floor(this.state.value)}</text>
      </svg>
    );
  }
}
