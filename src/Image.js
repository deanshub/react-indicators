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
  }

  getImage(){
    switch (this.props.name){
      case 'wearther':
        switch (this.props.type){
          case 'cloudy':
            return imagesStore.cloudy;
          case 'rain':
            return imagesStore.rain ;
          case 'snow':
            return imagesStore.snow ;
          case 'lightning':
            return imagesStore.lightning ;
          case 'sunny':
            return imagesStore.sunny ;
          case 'partly cloudy':
            return imagesStore.partlyCloudy ;
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
