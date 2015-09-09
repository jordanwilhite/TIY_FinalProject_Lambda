import React from 'react';
import Router, { RouteHandler } from 'react-router';
import LogoView from './logoview.js';
import MechanicsView from './mechanicsview.js';
import MechVariables from './mechanics.js';
import WavesView from './wavesview.js';
import WaveVariables from './waves.js'
import ElectricityView from './electricityview.js';
import ElectricVariables from './electricity.js';
import GeotrigView from './geotrigview.js';
import GeotrigVariables from './geotrig.js';
import TableView from './tableview.js';
import Tables from './tables.js';

var App = React.createClass ({
  render: function(){
    return(
    <div>
      <LogoView />
      <MechanicsView />
      <MechVariables />
      <WavesView />
      <WaveVariables />
      <ElectricityView />
      <ElectricVariables />
      <GeotrigView />
      <GeotrigVariables />
      <TableView />
      <Tables />
      <RouteHandler />
    </div>
    )
  }
});

export default App;
