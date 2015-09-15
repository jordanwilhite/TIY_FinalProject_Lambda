import React from 'react';
import Router, { RouteHandler } from 'react-router';
import LogoView from './logoview.js';
import SearchBar from './searchbar.js';
import MechanicsView from './mechanicsview.js';
import MechVariables from './mechanics.js';
import FluidVariables from './fluidthermal.js'
import WavesView from './wavesview.js';
import WaveVariables from './waves.js'
import ElectricityView from './electricityview.js';
import ElectricVariables from './electricity.js';
import ElecMagVariables from './emag.js';
import GeotrigView from './geotrigview.js';
import GeotrigVariables from './geotrig.js';
import TableView from './tableview.js';
import Tables from './tables.js';
import $ from 'jquery';

var App = React.createClass ({
  getInitialState: function() {
    return {
      list: []
    }
  },
  componentDidMount: function() {
    $(window).on("physics.searched", (e, data) => {
      this.setState({
        list: data.list
      });
    });
  },
  render: function(){
    return(
    <div>
      <LogoView />
      <SearchBar />
      <ul>
      {this.state.list.map((item, i) => {
        return <li className="formula">{item.get("value")}</li>;
      })}
      </ul>
      <MechanicsView />
      <MechVariables />
      <FluidVariables />
      <WavesView />
      <WaveVariables />
      <ElectricityView />
      <ElectricVariables />
      <ElecMagVariables />
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
