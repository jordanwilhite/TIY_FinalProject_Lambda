import React from 'react';
import Router, { RouteHandler } from 'react-router';
import LogoView from './logoview.js';
import SearchView from './searchview.js';
import MechanicsView from './mechanicsview.js';
import WavesView from './wavesview.js';
import ElectricityView from './electricityview.js';
import GeotrigView from './geotrigview.js';
import TableView from './tableview.js';

var App = React.createClass ({
  render: function(){
    return(
    <div>
      <LogoView />
      <SearchView />
      <MechanicsView />
      <WavesView />
      <ElectricityView />
      <GeotrigView />
      <TableView />
      <RouteHandler />
    </div>
    )
  }
});

export default App;
