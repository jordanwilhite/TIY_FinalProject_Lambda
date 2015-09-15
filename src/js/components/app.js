import React from 'react';
import Router, { RouteHandler } from 'react-router';
import LogoView from './logoview.js';
import SearchBar from './searchbar.js';


export default class App extends React.Component {
render(){
    return(
    <div>
      <LogoView />
      <SearchBar />
      <RouteHandler />
    </div>
    )
  }
};
