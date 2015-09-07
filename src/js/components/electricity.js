import React from 'react';

var ElectricVariables = React.createClass({
  render: function(){
    return(
        <div>
          <h1>Electricity Variables</h1>
            <p>A = area</p>
            <p>F = force</p>
            <p>I = current</p>
            <p>l = length</p>
            <p>P = power</p>
            <p>q = charge</p>
            <p>R = resistance</p>
            <p>r = separation</p>
            <p>t = time</p>
            <p>V = electric potential</p>
            <p>%rho; = resistivity</p>
          <h1>Formulas</h1>
          <p>F<sub>E</sub> = k (q<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>)</p>
          <p>I = &Delta;q/&Delta;t</p>
          <p>R = &rho;l/A</p>
          <p>I = &Delta;V/R</p>
          <p>P = I&Delta;V</p>
          <p>R<sub>s</sub> = &Sigma;<sub>i</sub>R<sub>i</sub></p>
          <p>1/R<sub>p</sub> = &Sigma;<sub>i</sub>1/R<sub>i</sub></p>
      </div>
    )
  }
});

export default ElectricVariables
