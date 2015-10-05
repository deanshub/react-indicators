import React, { Component, PropTypes } from 'react';
import {default} from 'font-awesome/css/font-awesome.css';

export class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
  };
  static defaultProps = {
    type: 'up',
    color:'black',
  };

  constructor(props) {
    super(props);
  }

  getIconClass(){
    switch (this.props.name){
      case 'thumb':
        return this.props.type=='down'?'fa-thumbs-o-down':'fa-thumbs-o-up';
        break;
      case 'chevron':
        return this.props.type=='down'?'fa-chevron-down':'fa-chevron-up';
        break;
      case 'check':
        return this.props.type=='down'?'fa-times':'fa-check';
        break;
      case 'signs':
        return this.props.type=='down'?'fa-minus':'fa-plus';
        break;
      case 'levels':
        return this.props.type=='down'?'fa-level-down':'fa-level-up';
        break;
      case 'arrow':
        return this.props.type=='down'?'fa-arrow-down':'fa-arrow-up';
        break;
      case 'long-arrow':
        return this.props.type=='down'?'fa-long-arrow-down':'fa-long-arrow-up';
        break;
      default:
        return '';
    }
  }

  render(){
    return (
      <i style={{color: this.props.color}} className={"icon fa " + this.getIconClass()} />
    );
  }
}
