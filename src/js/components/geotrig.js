import React from 'react';

var GeotrigVariables = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Geometry & Trigonometry Variables</h1>
          <p>A = area</p>
          <p>C = circumference</p>
          <p>V = volume</p>
          <p>S = surface area</p>
          <p>b = base</p>
          <p>h = height</p>
          <p>l = length</p>
          <p>w = width</p>
          <p>r = radius</p>
        <h1>Formulas</h1>
          <h3>Rectangle</h3>
            <p>A = bh</p>
          <h3>Triangle</h3>
            <p>A = 1/2 bh</p>
          <h3>Circle</h3>
            <p>A = &pi;r<sup>2</sup></p>
            <p>C = 2&pi;r</p>
          <h3>Rectangular solid</h3>
            <p>V = lwh</p>
          <h3>Cylinder</h3>
            <p>V = &pi;r<sup>2</sup>l</p>
            <p>C = 2&pi;rl + 2&pi;r<sup>2</sup></p>
          <h3>Sphere</h3>
            <p>V= 4/3&pi;r<sup>3</sup></p>
            <p>S = 4&pi;r<sup>2</sup></p>
          <h3>Right Triangle</h3>
            <p>c<sub>2</sub> = a<sub>2</sub> + b<sub>2</sub></p>
            <p>sin&theta; = a/c</p>
            <p>cos&theta; = b/c</p>
            <p>tan&theta; = a/b</p>
      </div>
    )
  }
});


export default GeotrigVariables
