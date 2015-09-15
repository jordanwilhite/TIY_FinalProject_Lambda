import React from 'react';
import WaveVariables from './waves.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class WavesView extends React.Component {
  render(){
    return(
      <div nameClass="links">
            <Link to="waves" className="wform">Wave Variables </Link>
            <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
};
