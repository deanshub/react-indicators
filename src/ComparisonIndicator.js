import React, { Component, PropTypes } from 'react';
import styles from './css/comparisonIndicator.css';
import {Title} from './Title';
import {Seperator} from './Seperator';

/**
<Title value=""/>
<Seperator/>
**/
export class ComparisonIndicator extends Component {
  static propTypes = {
    high: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired,
  };
  static defaultProps = {
    title: '',
  };

  constructor(props) {
    super(props);
  }

  getBarStyle(barType){
    let styleJson = {
      height:'100%',
    };
    if (barType==='high'){
      styleJson.width = ((this.props.low + this.props.high) / 100 * this.props.high) + '%' ;
      // styleJson['background-color'] = '#00c0e4';
    }else if (barType==='low'){
      styleJson.width = ((this.props.low + this.props.high) / 100 * this.props.low) + '%';
      // styleJson['background-color'] = '#fd625e';
    }
    return styleJson;
  }

  render() {
    return (
      <div className="indicator comparison">
        <Title value={this.props.title}/>
        <Seperator/>
        <div className="comparison-container">
          <div className="highBar" style={this.getBarStyle('high')}>
            <div className="arrow-head" />
            <div className="arrow-body">
              <Title color="white" value={this.props.high + '%'}/>
            </div>
          </div>
          <Seperator />
          <div className="lowBar" style={this.getBarStyle('low')}>
            <div className="arrow-body">
              <Title color="white" value={this.props.low  + '%'}/>
            </div>
            <div className="arrow-head" />
          </div>
        </div>
      </div>
    );
  }
}
