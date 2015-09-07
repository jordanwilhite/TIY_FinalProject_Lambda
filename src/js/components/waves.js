import React from 'react';

var WaveVariables = React.createClass({
  render: function (){
    return(
      <div>
        <h1>Wave Variables</h1>
          <p>f = frequency</p>
          <p>v = speed</p>
          <p>&lambda; = wavelength</p>
        <h1>Formula</h1>
          <p>&lambda; = v/f</p>
      </div>
    )
  }
});

export default WaveVariables
