import React, { Component, PropTypes } from 'react';
import styles from './css/gaugeIndicator.css';
import {Title} from './Title';
import {Seperator} from './Seperator';
import {Counter} from './Counter';
import {SvgIndicatorPart} from './SvgIndicatorPart';

/**
<Title value=""/>
<Seperator/>
<Title value=""/>
<SvgIndicatorPart name="" type=""/>
<Title value=""/>
**/
export class GaugeIndicator extends Component {
  static defaultProps = {
    title: '',
    color: 'black',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="indicator gauge">
        <Title value={this.props.title}/>

        <SvgIndicatorPart name="gauge" type={this.props.type} color={this.props.color} value={this.props.value}/>
        <Counter value={this.props.value} color={this.props.color} postfix="%" />

        <center>
          <div className="desc-container">
            <Counter color={this.props.color} value={25} postfix="%" />
            <Seperator color={this.props.color} value="/"/>
            <Counter color={this.props.color} value={102.8} prefix="" postfix="" />
          </div>
        </center>
      </div>
    );
  }
}
