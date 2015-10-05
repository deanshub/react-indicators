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
      <svg width="100" height="250" style={{margin:'auto', display:'block'}}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={100-this.props.value + '%'} stopColor="#fd625e" stopOpacity={0.1} />
            <stop offset={100-this.props.value + '%'} stopColor="#fd625e" stopOpacity={1} />
            <stop offset={this.props.value + '%'} stopColor="#fd625e" stopOpacity={1} />
          </linearGradient>
        </defs>

        <circle cx="50" cy="200" r="28" fill="#00c0e4" />
        <rect x="30" y="50" rx="18" ry="18" width="40" height="150" fill="#00c0e4" />

        <circle cx="50" cy="200" r="20" fill="white" />
        <rect x="38" y="62" rx="10" ry="10" width="24" height="130" fill="white" />

        <circle cx="50" cy="200" r="12" fill="#fd625e" />
        <rect x="46" y="74" rx="5" ry="5" width="8" height="120" fill="url(#grad1)" />
      </svg>
    );
  }
}
