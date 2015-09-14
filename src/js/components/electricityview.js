import React from 'react';
import Parse from 'parse';
import ElectricVariables from './electricity.js';
import ElecMagVariables from './emag.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var ElectricityView = React.createClass({
  render: function(){
    return(
      <div nameClass="links">
            <Link to="electricity" className="eform">Electricity Variables </Link>
            <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
});

export default ElectricityView
