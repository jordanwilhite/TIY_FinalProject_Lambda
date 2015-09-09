import React from 'react';

var WaveVariables = React.createClass({
  render: function (){
    return(
      <div>
        <h1>Wave Variables</h1>
          <li nameClass="wavelist">
            <ul>f = frequency</ul>
            <ul>v = speed</ul>
            <ul>&lambda; = wavelength</ul>
          </li>
        <h1>Formula</h1>
          <li>
            <ul>&lambda; = v/f</ul>
          </li>
      </div>
    )
  }
});

export default WaveVariables
