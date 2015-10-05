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
  };

  constructor(props) {
    super(props);
    this.state={
      title: this.props.title
    };
  }

  render() {
    return (
      <div className="indicator column">
        <Title value={this.state.title}/>
        <Seperator/>
        <Title color="#fd625e" value="Max"/>
        <SvgIndicatorPart name="column" type="thermometer" value={78}/>
        <Title color="#fd625e" value="Min"/>
      </div>
    );
  }
}
