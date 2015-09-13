import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import Router from 'react-router';
import MechVariables from './mechanics.js';
import FluidVariables from './fluidthermal.js';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';

var MechanicsView = React.createClass({
  render: function(){
    return(
      <div nameClass="links">
        <Link to="mechanics" className="mform">Mechanics Variables </Link>
        <Link to="app" className="home"> Home</Link>
      </div>
    )
  }
});

export default MechanicsView
