import {BasicColumn} from './svg/BasicColumn';
import {BasicBar} from './svg/BasicBar';
import {BasicPic} from './svg/BasicPic';
import React, { Component, PropTypes } from 'react';

export let svgsStore = {
  column:{
    basic: (props)=>(<BasicColumn {...props} />),
  },
  bar:{
    basic: (props)=>(<BasicBar {...props} />),
  },
  pic:{
    basic: (props)=>(<BasicPic {...props} />),
  },
};
