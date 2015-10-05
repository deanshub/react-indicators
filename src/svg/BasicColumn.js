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
      <svg width="100" height="250" style={{margin:'auto', display:'block'}}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={100-this.props.value + '%'} stopColor={this.props.color} stopOpacity={0.1} />
            <stop offset={100-this.props.value + '%'} stopColor={this.props.color} stopOpacity={1} />
            <stop offset={this.props.value + '%'} stopColor={this.props.color} stopOpacity={1} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100" height="250" fill="url(#grad1)" />
        <text x="15" y="125" width="100" height="250" fill="white" fontSize="2em">{this.props.value + '%'}</text>
      </svg>
    );
  }
}
