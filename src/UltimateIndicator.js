import React, { Component, PropTypes } from 'react';
import styles from './css/global.css';

import { BasicIndicator } from './BasicIndicator';
import { WeatherIndicator } from './WeatherIndicator';
import { ComparisonIndicator } from './ComparisonIndicator';
import { ColumnIndicator } from './ColumnIndicator';
import { BarIndicator } from './BarIndicator';
import { PictogramIndicator } from './PictogramIndicator';
import { GaugeIndicator } from './GaugeIndicator';

export class UltimateIndicator extends Component {
  static defaultProps = {
    type: 'basic',
    subType: 'basic',
    value: 78,
    title: 'Total Sales',
    color: '#00c0e4',
    iconName: 'thumb',
    iconType: 'down',
    maximum:100,
    minimum:0,
  };

  constructor(props) {
    super(props);
  }

  getIndicator(){
    let {subType, ...others} = this.props;
    let allIndicators = {
      basic:{
        basic:<BasicIndicator {...this.props}/>,
      },
      weather:<WeatherIndicator {...others} type={subType}/>,
      comparison:{
        basic:<ComparisonIndicator orientation="vertical" high={this.props.value} low={100-this.props.value} {...this.props}/>,
      },
      column:<ColumnIndicator {...others} type={subType}/>,
      bar:{
        basic:<BarIndicator {...this.props}/>,
      },
      pictogram:{
        basic:<PictogramIndicator {...this.props}/>,
      },
      gauge:{
        basic:<GaugeIndicator {...this.props}/>,
      },
    };

    if (allIndicators[this.props.type] && allIndicators[this.props.type][this.props.subType]) {
      return allIndicators[this.props.type][this.props.subType];
    }else if (allIndicators[this.props.type]) {
      return allIndicators[this.props.type];
    }else{
      return <div/>
    }
  }

  render() {
    return (
      this.getIndicator()
    );
  }
}
