import React, { Component, PropTypes } from 'react';
import {svgsStore} from './svgsStore';

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
  }

  getSvg(props){
    return svgsStore[this.props.name][this.props.type](props);
  }

  render(){
    return this.getSvg({value:this.props.value, color:this.props.color});
  }
}
