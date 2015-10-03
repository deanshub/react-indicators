import React, { Component, PropTypes } from 'react';
export class Seperator extends Component {
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

  setStyle(){
    return {
      color:this.state.color,
      'border-right': this.state.value==''?'1px solid #cccccc':'none'
    };
  }

  render(){
    return (
      <div className="seperator" style={this.setStyle()}>
        {this.state.value}
      </div>
    );
  }
}
