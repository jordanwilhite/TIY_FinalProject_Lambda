import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var SearchView = React.createClass({
  render: function(){
    return(
      <div>
        <button type="button">Tables</button>
        <button type="button">Mechanics</button>
        <button type="button">Waves</button>
        <button type="button">Electricity</button>
        <button type="button">Geometry & Trigonometry</button>
      </div>
    )
  }
});

export default SearchView;
