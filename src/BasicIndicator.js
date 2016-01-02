import React, { Component, PropTypes } from 'react';
import styles from './css/basicIndicator.css';
import {Title} from './Title';
import {Seperator} from './Seperator';
import {Counter} from './Counter';
import {Icon} from './Icon';

/**
<Title value=""/>
<Seperator/>
<Counter value={} prefix="" postfix="" />
<Icon name="" type="" />
<Counter value={} prefix="" postfix="" />
<Seperator value=""/>
<Counter value={} prefix="" postfix="" />
**/
export class BasicIndicator extends Component {
  static defaultProps = {
    value: 0,
    title: '',
    color: 'black',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="indicator basic">
        <Title value={this.props.title}/>
        <Seperator/>
        <Counter color={this.props.color} value={this.props.value} postfix="M$" />
        <Seperator/>
        <div className="secondery">
          <Icon color="#d0d0d0" name={this.props.iconName} type={this.props.iconType} />
          <Counter color="#d0d0d0" value={25} postfix="%" />
          <Seperator color="#d0d0d0" value="/"/>
          <Counter color="#d0d0d0" value={102.8} prefix="" postfix="" />
        </div>
      </div>
    );
  }
}
