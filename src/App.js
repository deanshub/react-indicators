import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
// import { Indicator } from './Indicator';
import { BasicIndicator } from './BasicIndicator';
import { WeatherIndicator } from './WeatherIndicator';
import { ComparisonIndicator } from './ComparisonIndicator';
import { ColumnIndicator } from './ColumnIndicator';
import { BarIndicator } from './BarIndicator';
import { PictogramIndicator } from './PictogramIndicator';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

        // <Counter increment={1} color={NICE} />
        // <Counter increment={5} color={SUPER_NICE} />
        // <Indicator title="Total Sales"></Indicator>
export class App extends Component {
  render() {
    return (
      <div>
        <BasicIndicator title="Total Sales"/>
        <WeatherIndicator title="WEATHER"/>
        <ComparisonIndicator orientation="vertical" title="Total Sales" high={72} low={28} />
        <ColumnIndicator title="Total Sales"/>
        <BarIndicator title="Total Sales" color="#00c0e4"/>
        <PictogramIndicator title="Total Sales" color="#00c0e4"/>
      </div>
    );
  }
}
