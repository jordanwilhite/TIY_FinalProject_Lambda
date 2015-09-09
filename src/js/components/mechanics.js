import React from 'react';

var MechVariables = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Mechanics Variables</h1>
          <li nameClass="mechlist">
            <ul>a = acceleration</ul>
            <ul>A = amplititude</ul>
            <ul>d = distance</ul>
            <ul>E = energy</ul>
            <ul>f = frequency</ul>
            <ul>F = force</ul>
            <ul>I = rotational inertia</ul>
            <ul>K = kinetic energy</ul>
            <ul>k = spring constant</ul>
            <ul>L = angular momentum</ul>
            <ul>m = mass</ul>
            <ul>P = power</ul>
            <ul>p = momentum</ul>
            <ul>r = radius</ul>
            <ul>T = period</ul>
            <ul>t = time</ul>
            <ul>U = potential energy</ul>
            <ul>V = volume</ul>
            <ul>v = speed</ul>
            <ul>W = work done on a system</ul>
            <ul>x = position</ul>
            <ul>y = height</ul>
            <ul>&alpha; = angular acceleration</ul>
            <ul>&mu; = coefficient of friction</ul>
            <ul>&theta; = angle</ul>
            <ul>&rho; = density</ul>
            <ul>&tau; = torque</ul>
            <ul>&omega; = angular speed</ul>
          </li>
        <h1>Formulas</h1>
        <li nameClass="mechlist">
            <ul>v<sub>x</sub> = v<sub>x0</sub> + a<sub>x</sub>t</ul>
            <ul>x = x<sub>0</sub> + v<sub>x0</sub>t + 1/2a<sub>x</sub>t<sup>t</sup></ul>
            <ul>v<sup>2</sup><sub>x</sub> = v <sup>2</sup><sub>x0</sub> + 2a<sub>x</sub>(x-x<sub>0</sub>)</ul>
            <ul>a = &Sigma;<sup>F</sup>/m = F<sub>net</sub>/m</ul>
            <ul>|F<sub>f| &le; &mu;|F<sub>n</sub>|</sub></ul>
            <ul>a<sub>c</sub> = v<sup>2</sup>/r</ul>
            <ul>p = mv</ul>
            <ul>&Delta;p = F&Delta;t</ul>
            <ul>K = 1/2mv<sup>2</sup></ul>
            <ul>&Delta;E = W = F<sub>‖</sub>d = Fdcos&theta;</ul>
            <ul>P = &delta;E/&delta;t</ul>
            <ul>&theta; = &theta;<sub>0</sub> + &omega;<sub>0</sub>t + 1/2at<sup>2</sup></ul>
            <ul>&omega; = &omega;<sub>0</sub> + at</ul>
            <ul>x = Acos(2&pi; ft)</ul>
            <ul>a = &Sigma;<sub>&tau;</sub>/I = &tau;<sub>net</sub>/I</ul>
            <ul>&tau; = r<sub>&perp;</sub>F = rFsin&theta;</ul>
            <ul>L = I&omega;</ul>
            <ul>&Delta;L = &tau;&Delta;t</ul>
            <ul>K = 1/2I&omega;<sup>2</sup></ul>
            <ul>|F<sub>s</sub>| = k|x|</ul>
            <ul>U<sub>s</sub> = 1/2kx<sup>2</sup></ul>
            <ul>&rho; = m/v</ul>
            <ul>&Delta;U<sub>g</sub> = mg&Delta;y</ul>
            <ul>T = 2&pi;/&omega; = 1/f</ul>
            <ul>T<sub>s</sub> = 2&pi;&radic;m/k</ul>
            <ul>T<sub>p</sub> = 2&pi;&radic;l/g</ul>
            <ul>|F<sub>g</sub>| = G<sup>m<sub>1</sub>m<sub>2</sub></sup>/r<sup2></sup2></ul>
            <ul>g = F<sub>g</sub>/m</ul>
            <ul>U<sub>g</sub> = -Gm<sub>1</sub>m<sub>2</sub>/r</ul>
          </li>
      </div>
    )
  }
});

export default MechVariables
