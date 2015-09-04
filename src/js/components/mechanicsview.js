import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var MechanicsView = React.createClass({
  render: function(){
    return(
      <div>
        <span>
          <nav>
            <Link to="mechanics">Mechanics Variables </Link>
          </nav>
        </span>
      </div>
    )
  }
});

export default MechanicsView
