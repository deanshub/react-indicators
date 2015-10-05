import React, { Component, PropTypes } from 'react';

export class BasicColumn extends Component {
  static propTypes = {
    value: PropTypes.number,
  };
  static defaultProps = {
    value: 0,
  };
  constructor(props) {
    super(props);
    this.state={
      value: this.props.value,
    };
  }

  changeVal(newVal){
    this.setState({
      value: newVal
    });
  }

  render(){
    return (
      <svg onClick={this.changeVal.bind(this,this.state.value+2)} width="100" height="250" style={{margin:'auto', display:'block'}}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset={100-this.state.value + '%'} stopColor="#fd625e" stopOpacity={0.1} />
            <stop offset={100-this.state.value + '%'} stopColor="#fd625e" stopOpacity={1} />
            <stop offset={this.state.value + '%'} stopColor="#fd625e" stopOpacity={1} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100" height="250" fill="url(#grad1)" />
        <text x="15" y="125" width="100" height="250" fill="white" fontSize="2em">{this.state.value + '%'}</text>
      </svg>
    );
  }
}
