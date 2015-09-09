import React from 'react';

var GeotrigVariables = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Geometry &<br></br>Trigonometry Variables</h1>
          <li nameClass="gtlist">
            <ul>A = area</ul>
            <ul>C = circumference</ul>
            <ul>V = volume</ul>
            <ul>S = surface area</ul>
            <ul>b = base</ul>
            <ul>h = height</ul>
            <ul>l = length</ul>
            <ul>w = width</ul>
            <ul>r = radius</ul>
          </li>
        <h1>Formulas</h1>
          <li nameClass="gtlist">
            <ul>A = bh</ul>
            <ul>A = 1/2bh</ul>
            <ul>A = &pi;r<sup>2</sup></ul>
            <ul>C = 2&pi;r</ul>
            <ul>V = lwh</ul>
            <ul>V = &pi;r<sub>2</sub>l</ul>
            <ul>S = 2&pi;rl + &pi;r<sub>2</sub></ul>
            <ul>V = 4/3&pi;r<sub>3</sub></ul>
            <ul>S = 4&pi;r<sub>2</sub></ul>
            <ul>c<sub>2</sub> = a<sub>2</sub> + b<sub>2</sub></ul>
            <ul>sin&theta; = a/c</ul>
            <ul>cos&theta; = b/c</ul>
            <ul>tan&theta; = a/b</ul>
          </li>
      </div>
    )
  }
});


export default GeotrigVariables
