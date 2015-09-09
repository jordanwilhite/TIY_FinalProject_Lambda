import React from 'react';

var ElectricVariables = React.createClass({
  render: function(){
    return(
        <div>
          <h1>Electricity Variables</h1>
            <li nameClass="electriclist">
              <ul>A = area</ul>
              <ul>F = force</ul>
              <ul>I = current</ul>
              <ul>l = length</ul>
              <ul>P = power</ul>
              <ul>q = charge</ul>
              <ul>R = resistance</ul>
              <ul>r = separation</ul>
              <ul>t = time</ul>
              <ul>V = electric potential</ul>
              <ul>&rho; = resistivity</ul>
            </li>
          <h1>Formulas</h1>
          <li>
            <ul>F<sub>E</sub> = k (q<sub>1</sub>q<sub>2</sub>/r<sup>2</sup>)</ul>
            <ul>I = &Delta;q/&Delta;t</ul>
            <ul>R = &rho;l/A</ul>
            <ul>I = &Delta;V/R</ul>
            <ul>P = I&Delta;V</ul>
            <ul>R<sub>s</sub> = &Sigma;<sub>i</sub>R<sub>i</sub></ul>
            <ul>1/R<sub>p</sub> = &Sigma;<sub>i</sub>1/R<sub>i</sub></ul>
          </li>
      </div>
    )
  }
});

export default ElectricVariables
