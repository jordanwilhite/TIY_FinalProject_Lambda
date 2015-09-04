import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var LogoView = React.createClass({
  render: function(){
    return(
      <div>
        <Link to="app"> Home</Link>
        <img src={"../Lambda Logo/PNG/Lambda-Medium.png"}></img>
        <h1>Lambda</h1>
        <h1>a physics aid | &lambda;</h1>
        <h1>Jordan Wilhite, 2015 | an Iron Yard Final Project</h1>
      </div>
    )
  }
});

export default LogoView;
