import React, { Component, PropTypes } from 'react';
// import styles from './css/columnIndicator.css';

import { BasicIndicator } from './BasicIndicator';
import { WeatherIndicator } from './WeatherIndicator';
import { ComparisonIndicator } from './ComparisonIndicator';
import { ColumnIndicator } from './ColumnIndicator';
import { BarIndicator } from './BarIndicator';
import { PictogramIndicator } from './PictogramIndicator';
import { GaugeIndicator } from './GaugeIndicator';

/**
<Title value=""/>
<Seperator/>
<Title value=""/>
<SvgIndicatorPart name="" type=""/>
<Title value=""/>
**/
export class IndicatorPanel extends Component {
  constructor(props) {
    super(props);
    this.state={
      type: 'basic',
      subType: 'basic',
      value: 78,
      title: 'Total Sales',
      color: '#00c0e4',
      iconName: 'thumb',
      iconType: 'down',
      typesAvailable:{
        basic:['basic'],
        weather:['cloudy'],
        comparison:['basic'],
        column:['basic','thermometer'],
        bar:['basic'],
        pictogram:['basic'],
        gauge:['basic'],
      },
      iconsAvailable:[
        'thumb',
        'chevron',
        'check',
        'signs',
        'levels',
        'arrow',
        'long-arrow',
      ]
    };
  }

  handleTypeChange(){
    let indType=React.findDOMNode(this.refs.type).value;
    this.setState({
      type: indType,
      subType: this.state.typesAvailable[indType][0],
    });
  }

  handleSubTypeChange(){
    this.setState({
      subType: React.findDOMNode(this.refs.subType).value,
    });
  }

  changeIndicator(){
    this.setState({
      type: React.findDOMNode(this.refs.type).value,
      subType: React.findDOMNode(this.refs.subType).value,
      color: React.findDOMNode(this.refs.color).value,
      value: parseInt(React.findDOMNode(this.refs.val).value),
      title: React.findDOMNode(this.refs.title).value,
      iconName: React.findDOMNode(this.refs.iconName)?React.findDOMNode(this.refs.iconName).value:'',
      iconType: React.findDOMNode(this.refs.iconType)?React.findDOMNode(this.refs.iconType).value:'',
    });
  }

  getIndicator(){
    let {subType, ...others} = this.state;
    switch (this.state.type) {
      case 'basic':
        switch (this.state.subType) {
          case 'basic':
            return (
              <BasicIndicator {...this.state}/>
            );
            break;
        }
        break;
      case 'weather':
        return (
          <WeatherIndicator {...others} type={subType}/>
        );
        break;
      case 'comparison':
        switch (this.state.subType) {
          case 'basic':
            return (
              <ComparisonIndicator orientation="vertical" high={this.state.value} low={100-this.state.value} {...this.state}/>
            );
            break;
        }
        break;
      case 'column':
          return (
            <ColumnIndicator {...others} type={subType}/>
          );
        break;
      case 'bar':
        switch (this.state.subType) {
          case 'basic':
            return (
              <BarIndicator {...this.state}/>
            );
            break;
        }
        break;
      case 'pictogram':
        switch (this.state.subType) {
          case 'basic':
            return (
              <PictogramIndicator {...this.state}/>
            );
            break;
        }
        break;
      case 'gauge':
        switch (this.state.subType) {
          case 'basic':
            return (
              <GaugeIndicator {...this.state}/>
            );
            break;
        }
        break;
      default:
        return null;
    }
  }

  renderIconSelection(){
    if (this.state.type==='basic'){
      return (
        <span>
          {' '}
          <span>Icon:</span>
          <select ref="iconName" defaultValue={this.state.iconName}>
            {
              this.state.iconsAvailable.map((iconName)=>(
                <option value={iconName}>{iconName}</option>
              ))
            }
          </select>
          {' '}
          <span>Icon Type:</span>
          <select ref="iconType" defaultValue={this.state.iconType}>
            <option value="down">down</option>
            <option value="up">up</option>
          </select>
        </span>
      )
    }
  }

  render() {
    return (
      <div className="indicator-panel">
        <span>Type:</span>
        <select ref="type" defaultValue={this.state.type} onChange={this.handleTypeChange.bind(this)}>
          {
            Object.keys(this.state.typesAvailable).map((type)=>(
              <option value={type}>{type}</option>
            ))
          }
        </select>
        {'  '}
        <span>Sub Type:</span>
        <select ref="subType" defaultValue={this.state.subType} onChange={this.handleSubTypeChange.bind(this)}>
          {
            this.state.typesAvailable[this.state.type].map((subType)=>(
              <option value={subType}>{subType}</option>
            ))
          }
        </select>
        {
          this.renderIconSelection()
        }
        {'  '}
        <span>Title:</span>
        <input ref="title" type="text" defaultValue={this.state.title} />
        {'  '}
        <span>Value:</span>
        <input ref="val" type="text" defaultValue={this.state.value} />
        {'  '}
        <span>Color:</span>
        <input ref="color" type="text" defaultValue={this.state.color} />
        {'  '}
        <button onClick={this.changeIndicator.bind(this)}>Set</button>
        <hr/>
        {
          this.getIndicator()
        }
      </div>
    );
  }
}
