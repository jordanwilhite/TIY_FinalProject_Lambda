import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import LogoView from './components/logoview.js';
import MechanicsViewHandler from './components/mechanicsview.js';
import WavesViewHandler from './components/wavesview.js';
import ElectricityViewHandler from './components/electricityview.js';
import GeotrigViewHandler from './components/geotrigview.js';
import TableViewHandler from './components/tableview.js';
import App from './components/app.js';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="waves" path="/waves" handler={WavesViewHandler}/>
    <Route name="electricity" path="/electricity" handler={ElectricityViewHandler}/>
    <Route name="geotrig" path="/geotrig" handler={GeotrigViewHandler}/>
    <Route name="mechanics" path="/mechanics" handler={MechanicsViewHandler}/>
    <Route name="tables" path="/tables" handler={TableViewHandler}/>
  </Route>
)


Router.run(routes, function (Handler) {
React.render(<Handler/>, document.getElementById('app'));
});
