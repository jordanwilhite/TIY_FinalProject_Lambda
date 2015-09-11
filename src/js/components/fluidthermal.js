import React from 'react';

var FluidVariables = React.createClass({
  render: function(){
    return(
     <div>
      <h1>Fluid Mechanics & Thermal Physics</h1>
        <ol nameClass="mechlist">
          <li>A = area</li>
          <li>F = force</li>
          <li>h = depth</li>
          <li>k = thermal conductivity</li>
          <li>K = kinetic energy</li>
          <li>L = thickness</li>
          <li>m = mass</li>
          <li>n = number of moles</li>
          <li>N = number of molecules</li>
          <li>P = pressure</li>
          <li>Q = energy transferred to a system by heating</li>
          <li>T = temperature</li>
          <li>t = time</li>
          <li>U = internal energy</li>
          <li>V = volume</li>
          <li>v = speed</li>
          <li>W = work done on a system</li>
          <li>y = height</li>
          <li>&rho; = density</li>
        </ol>
      <h1>Fluid Mechanics & Thermal Physics Formulas</h1>
        <ol nameClass="mechlist">
          <li>&rho; = m/v</li>
          <li>P = F/A</li>
          <li>P = P<sub>0</sub> + &rho;gh </li>
          <li>F<sub>b</sub> = &rho;Vg</li>
          <li>A<sub>1</sub>v<sub>1</sub> = A<sub>2</sub>v<sub>2</sub>  </li>
          <li>P<sub>1</sub> + &rho;gy<sub>1</sub> + 1/2&rho;v<sub>1</sub><sup>2</sup> = P<sub>2</sub> + &rho;gy<sub>2</sub> + 1/2&rho;v<sub>2</sub><sup>2</sup> </li>
          <li>Q/&Delta;t = kA&Delta;t/L</li>
          <li>PV = nRT = Nk<sub>B</sub>T</li>
          <li>K = 3/2k<sub>b</sub>T</li>
          <li>W = -P&Delta;V</li>
          <li>&Delta;U = Q + W</li>
        </ol>
      </div>
    )
  }
});
export default FluidVariables
