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
    title: '',
    color: 'black',
  };

  constructor(props) {
    super(props);
    this.state={
      title: this.props.title,
      color: this.props.color,
    };
  }

  render() {
    return (
      <div className="indicator bar">
        <Title value={this.state.title}/>
        <Seperator/>
        <div className="main-container">
          <div className="bar-container">
            <SvgIndicatorPart name="bar" type="basic" color={this.state.color} value={78}/>
            <div className="svg-description">
              <Title value="Min" color={this.state.color} />
              <Title value="Max" color={this.state.color} />
            </div>
          </div>
          <div className="desc-container">
            <Counter value={78} postfix="%" />
            <Title value="Growth"/>
          </div>
        </div>
      </div>
    );
  }
}
