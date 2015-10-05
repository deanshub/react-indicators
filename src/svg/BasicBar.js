import React, { Component, PropTypes } from 'react';

export class BasicBar extends Component {
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

  render(){
    return (
      <svg onClick={this.changeVal.bind(this,this.state.value+2)} width="220" height="30">
        <rect x="10" y="12" width="200" height="5" fill={this.state.color} opacity="0.3" />
        <rect x="10" y="12" width={(this.state.value*200)/100} height="5" fill={this.state.color} />
        <circle cx={10+((this.state.value*200)/100)} cy="15" r="6" fill={this.state.color} />
      </svg>
    );
  }
}
