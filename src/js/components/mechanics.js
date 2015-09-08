import React from 'react';

var MechVariables = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Mechanics Variables</h1>
          <p>a = acceleration</p>
          <p>A = amplititude</p>
          <p>d = distance</p>
          <p>E = energy</p>
          <p>f = frequency</p>
          <p>F = force</p>
          <p>I = rotational inertia</p>
          <p>K = kinetic energy</p>
          <p>k = spring constant</p>
          <p>L = angular momentum</p>
          <p>m = mass</p>
          <p>P = power</p>
          <p>p = momentum</p>
          <p>r = radius</p>
          <p>T = period</p>
          <p>t = time</p>
          <p>U = potential energy</p>
          <p>V = volume</p>
          <p>v = speed</p>
          <p>W = work done on a system</p>
          <p>x = position</p>
          <p>y = height</p>
          <p>&alpha; = angular acceleration</p>
          <p>&mu; = coefficient of friction</p>
          <p>&theta; = angle</p>
          <p>&rho; = density</p>
          <p>&tau; = torque</p>
          <p>&omega; = angular speed</p>
        <h1>Formulas</h1>
          <p>v<sub>x</sub> = v<sub>x0</sub> + a<sub>x</sub>t</p>
          <p>x = x<sub>0</sub> + v<sub>x0</sub>t + 1/2a<sub>x</sub>t<sup>t</sup></p>
          <p>v<sup>2</sup><sub>x</sub> = v <sup>2</sup><sub>x0</sub> + 2a<sub>x</sub>(x-x<sub>0</sub>)</p>
          <p>a = &Sigma;<sup>F</sup>/m = F<sub>net</sub>/m</p>
          <p>|F<sub>f| &le; &mu;|F<sub>n</sub>|</sub></p>
          <p>a<sub>c</sub> = v<sup>2</sup>/r</p>
          <p>p = mv</p>
          <p>&Delta;p = F&Delta;t</p>
          <p>K = 1/2mv<sup>2</sup></p>
          <p>&Delta;E = W = F<sub>‖</sub>d = Fdcos&theta;</p>
          <p>P = &delta;E/&delta;t</p>
          <p>&theta; = &theta;<sub>0</sub> + &omega;<sub>0</sub>t + 1/2at<sup>2</sup></p>
          <p>&omega; = &omega;<sub>0</sub> + at</p>
          <p>x = Acos(2&pi; ft)</p>
          <p>a = &Sigma;<sub>&tau;</sub>/I = &tau;<sub>net</sub>/I</p>
          <p>&tau; = r<sub>&perp;</sub>F = rFsin&theta;</p>
          <p>L = I&omega;</p>
          <p>&Delta;L = &tau;&Delta;t</p>
          <p>K = 1/2I&omega;<sup>2</sup></p>
          <p>|F<sub>s</sub>| = k|x|</p>
          <p>U<sub>s</sub> = 1/2kx<sup>2</sup></p>
          <p>&rho; = m/v</p>
          <p>&Delta;U<sub>g</sub> = mg&Delta;y</p>
          <p>T = 2&pi;/&omega; = 1/f</p>
          <p>T<sub>s</sub> = 2&pi;&radic;m/k</p>
          <p>T<sub>p</sub> = 2&pi;&radic;l/g</p>
          <p>|F<sub>g</sub>| = G<sup>m<sub>1</sub>m<sub>2</sub></sup>/r<sup2></sup2></p>
          <p>g = F<sub>g</sub>/m</p>
          <p>U<sub>g</sub> = -Gm<sub>1</sub>m<sub>2</sub>/r</p>
      </div>
    )
  }
});

export default MechVariables
