import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { BasicIndicator } from './BasicIndicator';
import { WeatherIndicator } from './WeatherIndicator';
import { ComparisonIndicator } from './ComparisonIndicator';
import { ColumnIndicator } from './ColumnIndicator';
import { BarIndicator } from './BarIndicator';
import { PictogramIndicator } from './PictogramIndicator';
import { GaugeIndicator } from './GaugeIndicator';

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
        <GaugeIndicator title="Total Sales" color="#00c0e4"/>
      </div>
    );
  }
}
