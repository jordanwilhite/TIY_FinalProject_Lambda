import React from 'react';
import Parse from 'parse';

var MechVariables = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Mechanics Variables</h1>
          <ol nameClass="mechlist">
            <li>a = acceleration</li>
            <li>A = amplititude</li>
            <li>d = distance</li>
            <li>E = energy</li>
            <li>f = frequency</li>
            <li>F = force</li>
            <li>I = rotational inertia</li>
            <li>K = kinetic energy</li>
            <li>k = spring constant</li>
            <li>L = angular momentum</li>
            <li>m = mass</li>
            <li>P = power</li>
            <li>p = momentum</li>
            <li>r = radius</li>
            <li>T = period</li>
            <li>t = time</li>
            <li>U = potential energy</li>
            <li>V = volume</li>
            <li>v = speed</li>
            <li>W = work done on a system</li>
            <li>x = position</li>
            <li>y = height</li>
            <li>&alpha; = angular acceleration</li>
            <li>&mu; = coefficient of friction</li>
            <li>&theta; = angle</li>
            <li>&rho; = density</li>
            <li>&tau; = torque</li>
            <li>&omega; = angular speed</li>
          </ol>
          <h1> Mechanics Formulas</h1>
          <ol nameClass="mechlist">
              <li>v<sub>x</sub> = v<sub>x0</sub> + a<sub>x</sub>t</li>
              <li>x = x<sub>0</sub> + v<sub>x0</sub>t + 1/2a<sub>x</sub>t<sup>t</sup></li>
              <li>v<sup>2</sup><sub>x</sub> = v <sup>2</sup><sub>x0</sub> + 2a<sub>x</sub>(x-x<sub>0</sub>)</li>
              <li>a = &Sigma;<sup>F</sup>/m = F<sub>net</sub>/m</li>
              <li>|F<sub>f| &le; &mu;|F<sub>n</sub>|</sub></li>
              <li>a<sub>c</sub> = v<sup>2</sup>/r</li>
              <li>p = mv</li>
              <li>&Delta;p = F&Delta;t</li>
              <li>K = 1/2mv<sup>2</sup></li>
              <li>&Delta;E = W = F<sub>‖</sub>d = Fdcos&theta;</li>
              <li>P = &delta;E/&delta;t</li>
              <li>&theta; = &theta;<sub>0</sub> + &omega;<sub>0</sub>t + 1/2at<sup>2</sup></li>
              <li>&omega; = &omega;<sub>0</sub> + at</li>
              <li>x = Acos(2&pi; ft)</li>
              <li>a = &Sigma;<sub>&tau;</sub>/I = &tau;<sub>net</sub>/I</li>
              <li>&tau; = r<sub>&perp;</sub>F = rFsin&theta;</li>
              <li>L = I&omega;</li>
              <li>&Delta;L = &tau;&Delta;t</li>
              <li>K = 1/2I&omega;<sup>2</sup></li>
              <li>|F<sub>s</sub>| = k|x|</li>
              <li>U<sub>s</sub> = 1/2kx<sup>2</sup></li>
              <li>&rho; = m/v</li>
              <li>&Delta;U<sub>g</sub> = mg&Delta;y</li>
              <li>T = 2&pi;/&omega; = 1/f</li>
              <li>T<sub>s</sub> = 2&pi;&radic;m/k</li>
              <li>T<sub>p</sub> = 2&pi;&radic;l/g</li>
              <li>|F<sub>g</sub>| = G<sup>m<sub>1</sub>m<sub>2</sub></sup>/r<sup2></sup2></li>
              <li>g = F<sub>g</sub>/m</li>
              <li>U<sub>g</sub> = -Gm<sub>1</sub>m<sub>2</sub>/r</li>
            </ol>
      </div>
    )
  }
});

export default MechVariables
