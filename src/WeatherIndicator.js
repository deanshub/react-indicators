import React, { Component, PropTypes } from 'react';
import styles from './css/weatherIndicator.css';
import {Title} from './Title';
import {Seperator} from './Seperator';
import {Counter} from './Counter';
import {Image} from './Image';

/**
<Title value=""/>
<Seperator/>
<Title value=""/>
<Image name="" type=""/>
<Counter value={} prefix="" postfix="" />
**/
export class WeatherIndicator extends Component {
  static defaultProps = {
    title: '',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="indicator weather">
        <Title value={this.props.title}/>
        <Seperator/>
        <Title value={this.props.type}/>
        <Image name="wearther" type={this.props.type} />
        <Counter color={this.props.color} value={this.props.value} postfix="°C" />
      </div>
    );
  }
}
