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
      <div className="title" style={{color:this.state.color}}>
        {this.state.value}
      </div>
    );
  }
}
