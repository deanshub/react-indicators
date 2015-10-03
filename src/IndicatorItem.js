import React, { Component, PropTypes } from 'react';
// import styles from './indicator.css'
import Odometer from 'odometer';
import {default} from 'odometer/themes/odometer-theme-default.css';

/**
 * state: {
            title:'text1',
            value: 100,
            color: 'red',
            iconType: '',
            sign:'',
          }
 * <IndicatorItem icon="" />
**/
export class IndicatorItem extends Component {
  // static propTypes = {
  //   items: PropTypes.array.isRequired
  // };

  static defaultProps = {
    title: '',
    type: 'Basic',
    icon: '',
    increment: 10,
    sign: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      iconType: props.iconType,
      title: props.title,
      color: props.color,
    };
  }

  componentDidMount(){
    if(this.state.value){
      this.odometer = new Odometer({
          el:React.findDOMNode(this.refs.mainValue),
          value:this.state.value,
      });
    }
  }

  componentDidUpdate() {
    this.odometer.update(this.state.value);
  }

  changeVal() {
    this.setState({
      value: this.state.value + this.props.increment
    });
  }

  // componentWillUnmount() {
  // }
  getIconClass(){
    switch (this.props.icon){
      case 'thumb':
        return this.state.iconType=='down'?'fa fa-thumbs-o-down':'fa fa-thumbs-o-up';
        break;
      case 'chevron':
        return this.state.iconType=='down'?'fa fa-chevron-down':'fa fa-chevron-up';
        break;
      case 'check':
        return this.state.iconType=='down'?'fa fa-times':'fa fa-check';
        break;
      case 'signs':
        return this.state.iconType=='down'?'fa fa-minus':'fa fa-plus';
        break;
      case 'levels':
        return this.state.iconType=='down'?'fa fa-level-down':'fa fa-level-up';
        break;
      case 'arrow':
        return this.state.iconType=='down'?'fa fa-arrow-down':'fa fa-arrow-up';
        break;
      case 'long-arrow':
        return this.state.iconType=='down'?'fa fa-long-arrow-down':'fa fa-long-arrow-up';
        break;
      default:
        return '';
    }
  }

  render() {
    return (
      <div style={{color:this.state.color}} className="indicator-item" onClick={this.props.increment?this.changeVal.bind(this):''}>
        {(this.props.icon)?(<i className={this.getIconClass()} />):''}
        <span>{this.state.title}</span><div ref="mainValue"></div> <span>{this.props.sign}</span>
      </div>
    );
  }
}
