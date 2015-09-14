import React from 'react';
import Parse from 'parse';

var ElectricVariables = React.createClass({
  render: function(){
    return(
        <div>
          <h1>Electricity Variables</h1>
            <ol nameClass="electriclist">
              <li>A = area</li>
              <li>F = force</li>
              <li>I = current</li>
              <li>&#x2113; = length</li>
              <li>P = power</li>
              <li>q = charge</li>
              <li>R = resistance</li>
              <li>r = separation</li>
              <li>t = time</li>
              <li>V = electric potential</li>
              <li>&rho; = resistivity</li>
            </ol>
        <h1>Formulas</h1>
          <ol nameClass="electriclist">
            <li>F<sub>E</sub> = k (q<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>)</li>
            <li>I = &Delta;q/&Delta;t</li>
            <li>R = &rho;&#x2113;/A</li>
            <li>I = &Delta;V/R</li>
            <li>P = I&Delta;V</li>
            <li>R<sub>s</sub> = &Sigma;<sub>i</sub>R<sub>i</sub></li>
            <li>1/R<sub>p</sub> = &Sigma;<sub>i</sub>1/R<sub>i</sub></li>
          </ol>
              </div>
    )
  }
});

export default ElectricVariables
