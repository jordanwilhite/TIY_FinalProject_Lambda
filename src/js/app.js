import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import LogoView from './components/logoview.js';
import MechanicsViewHandler from './components/mechanicsview.js';
import WavesViewHandler from './components/wavesview.js';
import ElectricityViewHandler from './components/electricityview.js';
import GeotrigViewHandler from './components/geotrigview.js';
import TableViewHandler from './components/tableview.js';
import App from './components/app.js';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="waves" path="/waves" handler={WavesViewHandler}/>
    <Route name="electricity" path="/electricity" handler={ElectricityViewHandler}/>
    <Route name="geotrig" path="/geotrig" handler={GeotrigViewHandler}/>
    <Route name="mechanics" path="/mechanics" handler={MechanicsViewHandler}/>
    <Route name="tables" path="/tables" handler={TableViewHandler}/>
  </Route>
)

$(document).ready(function() {
    $(document).anysearch({
        reactOnKeycodes: 'all',
        secondsBetweenKeypress: 1,
        searchPattern: {1: '[^~,]*'},
        minimumChars: 3,
        liveField: {selector: '#liveField', value: true},
        excludeFocus: 'input,textarea,select,#tfield',
        enterKey: 13,
        backspaceKey: 8,
        searchSlider: true,
        startAnysearch: function() {
            openHelp();
        },
        stopAnysearch: function() {
            closeHelp();
        },
        minimumCharsNotReached: function(string, stringLength, minLength) {
            alert(string + ' has ' + stringLength + ' chars! Minlength: ' + minLength);
        },
        searchFunc: function(string) {
            doAjaxSearch(string);
        },
        patternsNotMatched: function(string, patterns) {
            alert(string + ' must be in this form: ' + patterns);
        },
    });
});

Router.run(routes, function (Handler) {
React.render(<Handler/>, document.getElementById('app'));
});
