import React from 'react';
import Parse from 'parse';
import Router, { Route, RouteHandler } from 'react-router';
import SearchBar from './searchbar.js';
import ResultBox from './results.js';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <div nameClass="container">
          <form>
            <output></output>
          </form>
        </div>
        <SearchBar />
        <ResultBox />
      </div>
    )
  }
};
