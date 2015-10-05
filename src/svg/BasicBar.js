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
  }

  render(){
    return (
      <svg width="220" height="30">
        <rect x="10" y="12" width="200" height="5" fill={this.props.color} opacity="0.3" />
        <rect x="10" y="12" width={(this.props.value*200)/100} height="5" fill={this.props.color} />
        <circle cx={10+((this.props.value*200)/100)} cy="15" r="6" fill={this.props.color} />
      </svg>
    );
  }
}
