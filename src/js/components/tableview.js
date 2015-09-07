import React from 'react';
import Tables from './tables.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var TableView = React.createClass({
  render: function(){
    return(
      <div>
        <Link to="tables">Tables </Link>
        <Link to="app"> Home</Link>
      </div>
    )
  }
});

export default TableView
