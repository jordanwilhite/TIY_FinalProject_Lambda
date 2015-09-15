import React from 'react';
import Tables from './tables.js';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

export default class TableView extends React.Component {
  render(){
    return(
      <div nameClass="links">
        <Link to="tables" className="tform">Tables </Link>
        <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
};
