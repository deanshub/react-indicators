import React, { Component, PropTypes } from 'react';
import {svgsStore} from './svgsStore';
import {BasicColumn} from './svg/BasicColumn';

export class SvgIndicatorPart extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.number.isRequired,
    color: PropTypes.string,
  };
  static defaultProps = {
    type: 'basic',
    value: 0,
    type: 'black',
  };
  constructor(props) {
    super(props);
    this.state={
      name: this.props.name,
      type: this.props.type,
      value: this.props.value,
      color: this.props.color,
    };
  }

  changeVal(newVal){
    this.setState({
      name: newVal
    });
  }

  getSvg(props){
    return svgsStore[this.state.name][this.state.type](props);
  }

  render(){
    return this.getSvg({value:this.state.value, color:this.state.color});
  }
}
