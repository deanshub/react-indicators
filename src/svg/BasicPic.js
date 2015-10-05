import React, { Component, PropTypes } from 'react';

export class BasicPic extends Component {
  static propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
  };
  static defaultProps = {
    value: 0,
    color: 'black',
  };
  constructor(props) {
    super(props);
    this.state={
      value: this.props.value,
      color: this.props.color,
    };
  }

  changeVal(newVal){
    this.setState({
      value: newVal
    });
  }

  generateSquere(index, empty){
    let widthHeight = 15;
    let squeresInRow=10;
    let x = 10 + ((widthHeight + 2) * (index % squeresInRow));
    let y = 10 + Math.floor(index / squeresInRow) * (widthHeight + 2);
    return (
      <rect key={index} x={x} y={y} width={widthHeight} height={widthHeight} fill={this.state.color} opacity={empty?"0.3":"1"} />
    );
  }

  generateTable(length){
    let arr = Array.apply(null, Array(length));
    let squeresValue = (length / 100) * this.state.value;
    let squeresLeft = length - squeresValue;

    return arr.map((o,index)=>{
      return this.generateSquere(index, index < squeresLeft);
    })
  }

  render(){
    return (
      <svg onClick={this.changeVal.bind(this,this.state.value+2)} width="220" height="200">
        { this.generateTable(100) }
      </svg>
    );
  }
}
