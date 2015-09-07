import React from 'react';
import Router, { RouteHandler } from 'react-router';
import LogoView from './logoview.js';
import SearchView from './searchview.js';
import MechanicsView from './mechanicsview.js';
import WavesView from './wavesview.js';
import WaveVariables from './waves.js'
import ElectricityView from './electricityview.js';
import GeotrigView from './geotrigview.js';
import GeotrigVariables from './geotrig.js';
import TableView from './tableview.js';
import Tables from './tables.js';

var App = React.createClass ({
  render: function(){
    return(
    <div>
      <LogoView />
      <SearchView />
      <MechanicsView />
      <WavesView />
      <WaveVariables />
      <ElectricityView />
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
