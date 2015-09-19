import React, { Component, PropTypes } from 'react';
import styles from './indicator.css'
import {IndicatorItem} from './IndicatorItem'
import {default} from 'font-awesome/css/font-awesome.css'

/**
 * state: items [{
            title:'text1',
            value: 100,
            color: 'red',
            iconType: '',
            sign:'',
          },{
            ...
          }]
 * <Indicator type="basic" title="Top Sales">
 *   <IndicatorItem icon="thumb">
 * </Indicator>
    types: basic, weather, gauge, pictogram, bar, comparison
**/
export class Indicator extends Component {
  // static propTypes = {
  //   items: PropTypes.array.isRequired
  // };

  static defaultProps = {
    type: 'basic',
    title: '',
    increment: 3,
  };

  constructor(props) {
    super(props);
    // basic small
    this.state={
      items:[{
        value: 450,
        sign: 'M$',
      },{
        title: '25%/102.8',
        icon: 'thumb',
        iconType: 'up',
        color: '#00c0e4',
      },]
    };

    // this.state={
    //   items:[{
    //     value: 450,
    //     sign: 'M$',
    //     color: '#ffd633'
    //   },{
    //     title: '25%/102.8',
    //     icon: 'thumb',
    //     iconType: 'up',
    //     color: '#fd625e',
    //   },{
    //     value: 450,
    //     sign: 'M$',
    //     color: '#00c0e4'
    //   },{
    //     iconType: 'down',
    //     icon: 'chevron',
    //     title: 'Lior is beautiful',
    //     color: '#cccccc'
    //   },]
    // };
  }

  render() {
    return (
      <div className={"indicator " + this.props.type}>
        <div className="title">
          {this.props.title}
        </div>
        {this.state.items.map((item)=>{
          return (
            <IndicatorItem color={item.color} icon={item.icon} iconType={item.iconType} title={item.title} sign={item.sign} value={item.value}/>
          );
        },this)}
      </div>
    );
  }
}
