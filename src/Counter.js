import React, { Component, PropTypes } from 'react';
import Odometer from 'odometer';
import {default} from 'odometer/themes/odometer-theme-default.css';

export class Counter extends Component {
  static propTypes = {
    value: PropTypes.number,
    prefix: PropTypes.string,
    postfix: PropTypes.string,
    color: PropTypes.string,
  };
  static defaultProps = {
    value: 0,
    prefix: '',
    postfix: '',
    color: 'black',
  };
  constructor(props) {
    super(props);
    this.state={
      value: this.props.value,
      color: this.props.color,
    };
  }

  componentDidMount(){
    if(this.state.value){
      this.odometer = new Odometer({
          el:React.findDOMNode(this.refs.value),
          value:this.state.value,
      });
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps);
  }

  componentDidUpdate() {
    this.odometer.update(this.state.value);
  }

  changeVal(newVal){
    // this.setState({
    //   value: newVal
    // });
  }

  render(){
    return (
      <div style={{color:this.state.color}} className="counter" onClick={this.changeVal.bind(this, this.state.value+5)}>
        {this.props.prefix}
        <span ref="value">{this.state.value}</span>
        {this.props.postfix}
      </div>
    );
  }
}
