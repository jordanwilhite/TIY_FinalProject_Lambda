import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var WavesView = React.createClass({
  render: function(){
    return(
      <div>
        <span>
          <nav>
            <Link to="waves">Wave Variables</Link>
            <Link to="app">Home</Link>
          </nav>
        </span>
      </div>
    )
  }
});

export default WavesView
