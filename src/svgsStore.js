import React, { Component, PropTypes } from 'react';

import {BasicColumn} from './svg/BasicColumn';
import {BasicBar} from './svg/BasicBar';
import {BasicPic} from './svg/BasicPic';
import {BasicGauge} from './svg/BasicGauge';
import {ThrottleGauge} from './svg/ThrottleGauge';
import {ThermometerColumn} from './svg/ThermometerColumn';

export let svgsStore = {
  column:{
    basic: (props)=>(<BasicColumn {...props} />),
    thermometer: (props)=>(<ThermometerColumn {...props} />),
  },
  bar:{
    basic: (props)=>(<BasicBar {...props} />),
  },
  pic:{
    basic: (props)=>(<BasicPic {...props} />),
  },
  gauge:{
    basic: (props)=>(<BasicGauge {...props} />),
    throttle: (props)=>(<ThrottleGauge {...props} />),
    needle: (props)=>(<BasicGauge {...props} />),
  },
};
