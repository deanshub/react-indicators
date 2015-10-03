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
    this.state={
      title: this.props.title
    };
  }

  render() {
    return (
      <div className="indicator weather">
        <Title value={this.state.title}/>
        <Seperator/>
        <Title value="Cloudy"/>
        <Image name="wearther" type="cloudy" />
        <Counter value={-4} postfix="°C" />
      </div>
    );
  }
}
