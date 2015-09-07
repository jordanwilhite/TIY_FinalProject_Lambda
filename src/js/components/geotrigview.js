import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var GeotrigView = React.createClass({
  render: function(){
    return(
      <div>
          <nav>
            <Link to="geotrig">Geometry & Trigonometry Variables </Link>
            <Link to="app"> Home</Link>
          </nav>
      </div>
    )
  }
});

export default GeotrigView
