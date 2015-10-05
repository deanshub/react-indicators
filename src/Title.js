import React, { Component, PropTypes } from 'react';
export class Title extends Component {
  static propTypes = {
    value: PropTypes.string,
    color: PropTypes.string,
  };
  static defaultProps = {
    value:'',
    color:'black',
  };

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="title" style={{color:this.props.color}}>
        {this.props.value}
      </div>
    );
  }
}
