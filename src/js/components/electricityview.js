import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var ElectricityView = React.createClass({
  render: function(){
    return(
      <div>
        <span>
          <nav>
            <Link to="electricity">Electricity Variables</Link>
          </nav>
        </span>
      </div>
    )
  }
});

export default ElectricityView
