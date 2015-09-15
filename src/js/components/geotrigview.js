import React from 'react';
import GeotrigVariables from './geotrig.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class GeotrigView extends React.Component {
  render(){
    return(
      <div nameClass="links">
            <Link to="geotrig" className="gtform">Geometry & Trigonometry Variables </Link>
            <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
};
