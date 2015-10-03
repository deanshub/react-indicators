import React, { Component, PropTypes } from 'react';
import {imagesStore} from './imagesStore';

export class Image extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
  };
  static defaultProps = {
    type: 'up',
  };
  constructor(props) {
    super(props);
    this.state={
      name: this.props.name,
      type: this.props.type,
    };
  }

  changeVal(newVal){
    this.setState({
      name: newVal
    });
  }

  getImage(){
    switch (this.state.name){
      case 'wearther':
        switch (this.state.type){
          case 'cloudy':
            return imagesStore.cloudy;
            break;
          case 'rain':
            return ;
            break;
          case 'snow':
              return ;
              break;
          case 'lightning':
              return ;
              break;
          case 'sunny':
              return ;
              break;
          case 'partly cloudy':
              return ;
              break;
        break;
      default:
        return '';
      }
    }
  }

  render(){
    return (
      <img className="image" src={this.getImage()} />
    );
  }
}
