import React, { Component, PropTypes } from 'react';
import styles from './css/columnIndicator.css';
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
export class ColumnIndicator extends Component {
  static defaultProps = {
    title: '',
    type: 'basic',
    color: 'black'
  };

  render() {
    return (
      <div className="indicator column">
        <Title value={this.props.title}/>
        <SvgIndicatorPart name="column" {...this.props}/>
      </div>
    );
  }
}
