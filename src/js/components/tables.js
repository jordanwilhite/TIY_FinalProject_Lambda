import React from 'react';

export default class Tables extends React.Component {
  render(){
    return(
      <div nameClass ="tablegroup">
        <table>
            <th>Constants & Conversion Factors</th>
          <table>
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
                <td>Avogadro's Number</td>
                <td> N<sub>0</sub> = 6.02 &#xd7; 10<sup>23</sup>mol<sup>-1</sup></td>
              </tr>
              <tr>
                <td>Universal Gas Constant</td>
                <td>R = 8.31 j/(mol&#8226;K)</td>
              </tr>
              <tr>
                <td>Boltzmann's Constant</td>
                <td>k<sub>b</sub> = 1.38 &#xd7; 10<sup>-23</sup>J/K</td>
              </tr>
              <tr>
                <td>Electron Charge Magnitude</td>
                <td>e = 1.60 &#xd7; 10<sub>-19</sub>C</td>
              </tr>
              <tr>
                <td>1 Electron Volt</td>
                <td> 1eV = 1.60 &#xd7; 10<sub>-19</sub>J</td>
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
                <td>Coulombs Law Constatnt</td>
                <td>k = 1/4&pi;&epsilon;<sub>0</sub> = 9.0 &#xd7; 10<sup>9</sup> N-m<sup>2</sup> /C<sup>2</sup></td>
              </tr>
              <tr>
                <td>Universal Gravitational Constant</td>
                <td>G = 6.67 &#xd7; 10<sup>-11</sup> m<sup>3</sup> /kg&middot;s<sup>2</sup></td>
              </tr>
              <tr>
                <td>Acceleration due <br></br> to gravity at Earths Surface</td>
                <td> g = 9.8 m/s<sup>2</sup></td>
              </tr>
              <tr>
                <td>1 Unified Atomic Mass Unit</td>
                <td>1 u = 1.66 &#xd7; 10<sup>-27</sup> kg = 931 MeV/c<sup>2</sup></td>
              </tr>
              <tr>
                <td>Planck's Constant</td>
                <td>h = 6.63 &#xd7; 10<sub>-34</sub>J&#8226;s = 4.14 &#xd7; 10<sup>-15</sup> eV&#8226;s </td>
              </tr>
              <tr>
                <td>Vacuum Permittivity</td>
                <td>&epsilon;<sub>0</sub> = 8.85 &#xd7; 10<sup>12</sup>C<sup>2</sup>/N&#8226;m<sup>2</sup></td>
              </tr>
              <tr>
                <td>Magnetic Constant</td>
                <td>k&#8242; = &mu;<sub>0</sub>/4&pi; = 1 &#xd7; 10<sup>-7</sup> (T&#8226;m)/A </td>
              </tr>
              <tr>
                <td> 1 Atmosphere Pressure</td>
                <td> 1 atm = 1.0 &#xd7; 10<sup>5</sup> N/m<sup>2</sup> = 1.0 &#xd7; 10<sup>5</sup>Pa</td>
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
             <th>Unit Symbols</th>
                <tr></tr>
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
                <tr></tr>
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
              </table>
              <table>
                <th>Values of Trigonometric Functions for Common Angles</th>
                <tr>
                  <td>&theta;</td>
                  <td>0&deg;</td>
                  <td>30&deg;</td>
                  <td>37&deg;</td>
                  <td>45&deg;</td>
                  <td>53&deg;</td>
                  <td>60&deg;</td>
                  <td>90&deg;</td>
                </tr>
                  <td>sin&theta;</td>
                  <td>0</td>
                  <td>1/2</td>
                  <td>3/5</td>
                  <td>&radic;2/2</td>
                  <td>4/5</td>
                  <td>&radic;3/2</td>
                  <td>1</td>
                <tr>
                  <td>cos&theta;</td>
                  <td>1</td>
                  <td>&radic;3/2</td>
                  <td>4/5</td>
                  <td>&radic;2/2</td>
                  <td>3/5</td>
                  <td>1/2</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>tan&theta;</td>
                  <td>0</td>
                  <td>&radic;3/3</td>
                  <td>3/4</td>
                  <td>1</td>
                  <td>4/3</td>
                  <td>&radic;3</td>
                  <td>&infin;</td>
                </tr>
            </table>
          </table>
      </div>
    )
  }
};
