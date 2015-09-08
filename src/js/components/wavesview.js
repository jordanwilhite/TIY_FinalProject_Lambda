import React from 'react';
import WaveVariables from './waves.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var WavesView = React.createClass({
  render: function(){
    return(
      <div nameClass="links">
            <Link to="waves" className="wform">Wave Variables </Link>
            <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
});

export default WavesView
