import React, { Component, PropTypes } from 'react';

export class ThermometerColumn extends Component {
  static propTypes = {
    value: PropTypes.number,
  };
  static defaultProps = {
    value: 0,
  };
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <svg width="100%" height="90%" style={{margin:'auto', display:'block'}}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={100-this.props.value + '%'} stopColor={this.props.color} stopOpacity={0.3} />
            <stop offset={100-this.props.value + '%'} stopColor={this.props.color} stopOpacity={1} />
            <stop offset={this.props.value + '%'} stopColor={this.props.color} stopOpacity={1} />
          </linearGradient>
        </defs>

        <circle cx="50%" cy="80%" r="6%" fill="#fd625e" />
        <rect x="48%" y="4%" rx="5%" ry="5%" width="4%" height="75%" fill="#fd625e" />

        <circle cx="50%" cy="80%" r="5.5%" fill="white" />
        <rect x="48.35%" y="5%" rx="4%" ry="4%" width="3.3%" height="75%" fill="white" />

        <circle cx="50%" cy="80%" r="4.5%" fill={this.props.color} />
        <rect x="49%" y="6%" rx="3%" ry="3%" width="2%" height="65%" fill="url(#grad1)" />
      </svg>
    );
  }
}
