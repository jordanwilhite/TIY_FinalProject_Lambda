import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import LogoView from './components/logoview.js';
import SearchView from './components/searchview.js';
import MechanicsView from './components/mechanicsview.js';
import WavesViewHandler from './components/wavesview.js';
import ElectricityView from './components/electricityview.js';
import GeotrigView from './components/geotrigview.js';
import TableView from './components/tableview.js';
import App from './components/app.js';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="waves" path="/waves" handler={WavesViewHandler}/>
  </Route>
)

Router.run(routes, function (Handler) {
React.render(<Handler/>, document.getElementById('app'));
});
