import React from 'react';
import Tables from './tables.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var TableView = React.createClass({
  render: function(){
    return(
      <div nameClass="links">
        <Link to="tables" className="tform">Tables </Link>
        <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
});

export default TableView
