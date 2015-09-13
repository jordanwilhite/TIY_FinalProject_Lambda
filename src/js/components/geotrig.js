import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

var GeotrigVariables = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Geometry &<br></br>Trigonometry Variables</h1>
          <ol nameClass="gtlist">
            <li>A = area</li>
            <li>C = circumference</li>
            <li>V = volume</li>
            <li>S = surface area</li>
            <li>b = base</li>
            <li>h = height</li>
            <li>l = length</li>
            <li>w = width</li>
            <li>r = radius</li>
          </ol>
        <h1>Formulas</h1>
          <ol nameClass="gtlist">
            <li>A = bh</li>
            <li>A = 1/2bh</li>
            <li>A = &pi;r<sup>2</sup></li>
            <li>C = 2&pi;r</li>
            <li>V = lwh</li>
            <li>V = &pi;r<sub>2</sub>l</li>
            <li>S = 2&pi;rl + &pi;r<sub>2</sub></li>
            <li>V = 4/3&pi;r<sub>3</sub></li>
            <li>S = 4&pi;r<sub>2</sub></li>
            <li>c<sub>2</sub> = a<sub>2</sub> + b<sub>2</sub></li>
            <li>sin&theta; = a/c</li>
            <li>cos&theta; = b/c</li>
            <li>tan&theta; = a/b</li>
          </ol>
      <h1>Modern Physics Variables</h1>
          <ol nameClass="gtlist">
            <li>E = energy</li>
            <li>f = frequency</li>
            <li>K = kinetic energy</li>
            <li>m = mass</li>
            <li>p = momentum</li>
            <li>&lambda; = wavelength</li>
            <li>&phi; = work function</li>
          </ol>
      <h1>Modern Physics Formulas</h1>
        <ol nameClass="gtlist">
          <li>E = hf</li>
          <li>K<sub>max</sub> = hf - &phi;</li>
          <li>&lambda; = h/p</li>
          <li>E = mc<sup>2</sup></li>
        </ol>
      </div>
    )
  }
});


export default GeotrigVariables
