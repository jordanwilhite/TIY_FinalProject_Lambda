import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import GeotrigVariables from './geotrig.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var GeotrigView = React.createClass({
  render: function(){
    return(
      <div nameClass="links">
            <Link to="geotrig" className="gtform">Geometry & Trigonometry Variables </Link>
            <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
});

export default GeotrigView
