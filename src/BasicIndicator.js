import React, { Component, PropTypes } from 'react';
import styles from './css/basicIndicator.css';
import {Title} from './Title';
import {Seperator} from './Seperator';
import {Counter} from './Counter';
import {Icon} from './Icon';


// import {default} from 'font-awesome/css/font-awesome.css'

/**
<Title value=""/>
<Seperator/>
<Counter value={} prefix="" postfix="" />
<Icon name="" type="" />
<Counter value={} prefix="" postfix="" />
<Seperator value=""/>
<Counter value={} prefix="" postfix="" />
**/
export class BasicIndicator extends Component {
  static defaultProps = {
    title: '',
  };

  constructor(props) {
    super(props);
    this.state={
      title: this.props.title
    };
      // items:[{
      //   value: 450,
      //   sign: 'M$',
      // },{
      //   title: '25%/102.8',
      //   icon: 'thumb',
      //   iconType: 'up',
      //   color: '#00c0e4',
      // },]

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
      <div className="indicator basic">
        <Title value={this.state.title}/>
        <Seperator/>
        <Counter value={450} postfix="M$" />
        <Icon color="#00c0e4" name="thumb" type="down" />
        <Counter color="#00c0e4" value={25} postfix="%" />
        <Seperator color="#00c0e4" value="/"/>
        <Counter color="#00c0e4" value={102.8} prefix="" postfix="" />
      </div>
    );
  }
}
