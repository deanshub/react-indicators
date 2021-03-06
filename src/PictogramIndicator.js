import React, { Component, PropTypes } from 'react';
import styles from './css/pictogramIndicator.css';
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
export class PictogramIndicator extends Component {
  static defaultProps = {
    title: '',
    color: 'black',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="indicator pictogram">
        <Title value={this.props.title}/>
        <Seperator/>

        <div className="desc-container">
          <Counter color="#00c0e4" value={25} postfix="%" />
          <Seperator color="#00c0e4" value="/"/>
          <Counter color="#00c0e4" value={102.8} prefix="" postfix="" />
        </div>

        <SvgIndicatorPart name="pic" type="basic" color={this.props.color} value={this.props.value}/>
        <Counter value={this.props.value} postfix="%" />
      </div>
    );
  }
}
