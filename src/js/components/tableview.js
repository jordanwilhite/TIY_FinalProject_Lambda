import React from 'react';

var TableView = React.createClass({
  render: function(){
    return(
      <div>
      <table>
        <th>Constants & Conversion Factors</th>
          <tr>
            <td>Proton Mass</td>
            <td>m<sub>p </sub>=1.67 &#xd7; 10<sup>-27</sup> kg</td>
          </tr>
          <tr>
            <td>Neutron Mass</td>
            <td>m<sub>n </sub>=1.67 &#xd7; 10<sup>-27</sup> kg</td>
          </tr>
          <tr>
            <td>Electron Mass</td>
            <td>m<sub>c</sub>=9.11 &#xd7; 10<sup>-31</sup> kg</td>
          </tr>
          <tr>
            <td>Speed of Light</td>
            <td>c = 3.00 &#xd7;10<sup>8</sup> m/s</td>
          </tr>
          <tr>
            <td>Electron Charge Magnitude</td>
            <td>e = 1.60 &#xd7;10<sup>-19</sup> C</td>
          </tr>
          <tr>
            <td>Coulomb's Law Constatnt</td>
            <td>k = 1/4&pi;&epsilon;<sub>0</sub> = 9.0 &#xd7; 10<sup>9</sup> N-m<sup>2</sup> /C<sup>2</sup></td>
          </tr>
          <tr>
            <td>Universal Gravitational Constant</td>
            <td>G = 6.67 &#xd7; 10<sup>-11</sup> m<sup>3</sup> /kg&middot;s<sup>2</sup></td>
          </tr>
          <tr>
            <td>Acceleration due <br></br> to gravity at Earth's Surface</td>
            <td> g = 9.8 m/s<sup>2</sup></td>
          </tr>
        </table>
      <table>
        <th>Prefixes</th>
        <tr>
          <td>Factor</td>
          <td>10<sup>12</sup></td>
          <td>10<sup>9</sup></td>
          <td>10<sup>6</sup></td>
          <td>10<sup>3</sup></td>
          <td>10<sup>-2</sup></td>
          <td>10<sup>-3</sup></td>
          <td>10<sup>-6</sup></td>
          <td>10<sup>-9</sup></td>
          <td>10<sup>-12</sup></td>
        </tr>
        <tr>
          <td>Prefix</td>
          <td>tera</td>
          <td>giga</td>
          <td>mega</td>
          <td>kilo</td>
          <td>centi</td>
          <td>milli</td>
          <td>micro</td>
          <td>nano</td>
          <td>pico</td>
        </tr>
        <tr>
          <td>Symbol</td>
            <td>T</td>
            <td>G</td>
            <td>M</td>
            <td>k</td>
            <td>c</td>
            <td>m</td>
            <td>&mu;</td>
            <td>n</td>
            <td>p</td>
        </tr>
      </table>
      <table>
        <th>Unit <br>Symbols</br></th>
          <tr>Name</tr>
            <td>meter</td>
            <td>kilogram</td>
            <td>second</td>
            <td>ampere</td>
            <td>kelvin</td>
            <td>hertz</td>
            <td>newton</td>
            <td>jule</td>
            <td>watt</td>
            <td>coulomb</td>
            <td>volt</td>
            <td>ohm</td>
            <td>degrees Celsius</td>
          <tr>Symbol</tr>
            <td>m</td>
            <td>kg</td>
            <td>s</td>
            <td>A</td>
            <td>K</td>
            <td>Hz</td>
            <td>N</td>
            <td>J</td>
            <td>W</td>
            <td>C</td>
            <td>V</td>
            <td>&Omega;</td>
            <td>&deg;C</td>
      </table>
      <table>
        <th>Values of Trigonometric Functions for Common Angles</th>
      </table>
      </div>
    )
  }
});

export default TableView
