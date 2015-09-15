import React from 'react';
import Parse from './parse';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from './components/app.js';

let routes = (
  <Route handler={App}>
    <DefaultRoute name="home"/>
  </Route>
)


Router.run(routes, function (Handler) {
React.render(<Handler/>, document.getElementById('app'));
});
