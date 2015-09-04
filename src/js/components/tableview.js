import React from 'react';

var TableView = React.createClass({
  render: function(){
    return(
      <div>
      <table>
        <th>Constants & Conversion Factors</th>
          <tr>
            <td>Proton Mass</td>
          </tr>
          <tr>
            <td>Neutron Mass</td>
          </tr>
          <tr>
            <td>Electron Mass</td>
          </tr>
          <tr>
            <td>Speed of Light</td>
          </tr>
          <tr>
            <td>Electron Charge Magnitude</td>
          </tr>
          <tr>
            <td>Coulomb's Law Constatnt</td>
          </tr>
          <tr>
            <td>Universal Gravitational Constant</td>
          </tr>
          <tr>
            <td>Accel. due to gravity at Earth's Surface</td>
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
