import React from 'react';
import Router, { RouteHandler } from 'react-router';
import LogoView from './logoview.js';
import Home from './home.js';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <LogoView />
        <Home />
        <RouteHandler />
      </div>
    )
  }
};
