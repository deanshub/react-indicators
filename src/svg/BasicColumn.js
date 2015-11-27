import React, { Component, PropTypes } from 'react';

export class BasicColumn extends Component {
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
      <svg width="100%" height="90%" style={{margin:'auto', display:'block'}}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={100-this.props.value + '%'} stopColor={this.props.color} stopOpacity={0.1} />
            <stop offset={100-this.props.value + '%'} stopColor={this.props.color} stopOpacity={1} />
            <stop offset={this.props.value + '%'} stopColor={this.props.color} stopOpacity={1} />
          </linearGradient>
        </defs>
        <rect x="47.5%" width="5%" height="80%" fill="url(#grad1)" />
        <text textAnchor="middle" x="50%" y="90%" width="100%" height="20%" fill={this.props.color} fontSize="2em">{this.props.value}</text>
      </svg>
    );
  }
}
