import React, { Component } from 'react';
import styles from './css/global.css';
import { IndicatorPanel } from './IndicatorPanel';

// import { NICE, SUPER_NICE } from './colors';

export class App extends Component {
  render() {
    return (
      <div>
        <IndicatorPanel />
      </div>
    );
  }
}
