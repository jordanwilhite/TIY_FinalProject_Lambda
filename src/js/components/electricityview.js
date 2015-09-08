import React from 'react';
import ElectricVariables from './electricity.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var ElectricityView = React.createClass({
  render: function(){
    return(
      <div nameClass="links">
            <Link to="electricity">Electricity Variables </Link>
            <Link to="app"> Home</Link>
      </div>
    )
  }
});

export default ElectricityView
