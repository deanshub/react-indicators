import React, { Component, PropTypes } from 'react';
// import styles from './css/columnIndicator.css';

import { UltimateIndicator } from './UltimateIndicator';

export class IndicatorPanel extends Component {
  constructor(props) {
    super(props);
    this.state={
      type: 'basic',
      subType: 'basic',
      minimum:0,
      maximum:100,
      value: 78,
      title: 'Total Sales',
      color: '#00c0e4',
      iconName: 'thumb',
      iconType: 'down',
      typesAvailable:{
        basic:['basic'],
        weather:[
          'cloudy',
          'rain',
          'snow',
          'lightning',
          'sunny',
          'partly cloudy',
        ],
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
    let indType=this.refs.type.value;
    this.setState({
      type: indType,
      subType: this.state.typesAvailable[indType][0],
      iconName: this.state.iconName?this.state.iconName:this.state.iconsAvailable[0],
      iconType: this.state.iconType?this.state.iconType:'down',
    });
  }

  handleSubTypeChange(){
    this.setState({
      subType: this.refs.subType.value,
    });
  }

  changeIndicator(){
    this.setState({
      type: this.refs.type.value,
      subType: this.refs.subType.value,
      color: this.refs.color.value,
      value: parseInt(this.refs.val.value),
      minimum: parseInt(this.refs.minimum.value),
      maximum: parseInt(this.refs.maximum.value),
      title: this.refs.title.value,
      iconName: this.refs.iconName?this.refs.iconName.value:'',
      iconType: this.refs.iconType?this.refs.iconType.value:'',
    });
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
                <option key={iconName} value={iconName}>{iconName}</option>
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
              <option key={type} value={type}>{type}</option>
            ))
          }
        </select>
        {'  '}
        <span>Sub Type:</span>
        <select ref="subType" defaultValue={this.state.subType} onChange={this.handleSubTypeChange.bind(this)}>
          {
            this.state.typesAvailable[this.state.type].map((subType)=>(
              <option key={subType} value={subType}>{subType}</option>
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
        <input ref="val" type="number" onChange={this.changeIndicator.bind(this)} defaultValue={this.state.value} />
        {'  '}
        <span>Color:</span>
        <input ref="color" type="color" defaultValue={this.state.color} />
        {'  '}
        <span>Minimum:</span>
        <input ref="minimum" type="number" defaultValue={this.state.minimum} />
        {'  '}
        <span>Maximum:</span>
        <input ref="maximum" type="number" defaultValue={this.state.maximum} />
        {'  '}
        <button onClick={this.changeIndicator.bind(this)}>Set</button>
        <hr/>
        <div style={{height:'450px', border:'black 1px solid'}}>
          <UltimateIndicator {...this.state} />
        </div>
      </div>
    );
  }
}
