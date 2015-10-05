import React, { Component, PropTypes } from 'react';
import styles from './css/barIndicator.css';
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
export class BarIndicator extends Component {
  static defaultProps = {
    value:0,
    title: '',
    color: 'black',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="indicator bar">
        <Title value={this.props.title}/>
        <Seperator/>
        <div className="main-container">
          <div className="bar-container">
            <SvgIndicatorPart name="bar" type="basic" color={this.props.color} value={this.props.value}/>
            <div className="svg-description">
              <Title value="Min" color={this.props.color} />
              <Title value="Max" color={this.props.color} />
            </div>
          </div>
          <div className="desc-container">
            <Counter value={this.props.value} postfix="%" />
            <Title value="Growth"/>
          </div>
        </div>
      </div>
    );
  }
}
