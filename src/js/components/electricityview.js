import React from 'react';
import ElectricVariables from './electricity.js';
import ElecMagVariables from './emag.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class ElectricityView extends React.Component {
  render(){
    return(
      <div nameClass="links">
            <Link to="electricity" className="eform">Electricity Variables </Link>
            <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
};
