import React from 'react';

export default class ElecMagVariables extends React.Component {
  render(){
    return(
      <div>
        <h1>Electricity & Magnetism Variables</h1>
          <ol nameClass="electriclist">
            <li>A = area</li>
            <li>B = magnetic field</li>
            <li>C = capacitance</li>
            <li>d = distance</li>
            <li>E = electric field</li>
            <li>&Epsilon; = emf</li>
            <li>F = force</li>
            <li>I = current</li>
            <li>&#x2113; = length</li>
            <li>P = power</li>
            <li>Q = charge</li>
            <li>q = point charge</li>
            <li>R = resistance</li>
            <li>r = separation</li>
            <li>t = time</li>
            <li>U = potential (stored) energy</li>
            <li>V = electric potential</li>
            <li>&nu; = speed</li>
            <li>&kappa; = dielectric constant</li>
            <li>&rho; = resistivity</li>
            <li>&theta; = angle</li>
            <li>&Phi; = flux</li>
          </ol>
        <h1>Electricity & Magnetism Formulas</h1>
          <ol nameClass="electriclist">
            <li>|F<sub>E</sub>| = 1/4<sub>&pi;&epsilon;<sub>0</sub></sub>|q<sub>1</sub>q<sub>2</sub>|/r<sup>2</sup></li>
            <li>E = F<sub>E</sub>/q</li>
            <li>|E|  = 1/4<sub>&pi;&epsilon;<sub>0</sub></sub>|q<sub>2</sub>|/r<sup>2</sup></li>
            <li>&Delta;U<sub>E</sub> = q&Delta;V</li>
            <li>V = 1/4<sub>&pi;&epsilon;<sub>0</sub></sub>q/r</li>
            <li>|E| = |&Delta;V/&Delta;r|</li>
            <li>&Delta;V = Q/C</li>
            <li>C = &kappa;&epsilon;<sub>0</sub>A/d</li>
            <li>E = Q/&epsilon;<sub>0</sub>A</li>
            <li>U<sub>c</sub> = 1/2Q&Delta;V = 1/2C(&Delta;V)<sup>2</sup></li>
            <li>I = &Delta;Q/&Delta;t</li>
            <li>R = &rho;l/A</li>
            <li>P = I&Delta;V</li>
            <li>I = &Delta;V/A</li>
            <li>R<sub>s</sub> = &Sigma;<sub>i</sub>R<sub>i</sub></li>
            <li>1/R<sub>p</sub> = &Sigma;<sub>i</sub>1/R<sub>i</sub></li>
            <li>C<sub>p</sub> = &Sigma;<sub>i</sub>C<sub>i</sub></li>
            <li>1/C<sub>s</sub> = &Sigma;<sub>i</sub>1/C<sub>i</sub></li>
            <li>B = &mu;<sub>0</sub>I/2&pi;r</li>
            <li>F<sub>m</sub> = q&nu; &times; B</li>
            <li>|F<sub>M</sub>| = |q&nu;|sin&theta;||B|</li>
            <li>F<sub>M</sub> = I&#x2113; &times; B</li>
            <li>|F<sub>M</sub>| = |I&#x2113;||sin&theta;||B|</li>
            <li>&Phi;<sub>B</sub> = B&#8226;A</li>
            <li>&Phi;<sub>B</sub> = |B|cos&theta;|A|</li>
            <li>&Epsilon; = -&Delta;&Phi;<sub>B</sub>/&Delta;t</li>
            <li>&Epsilon; = B&#x2113;&nu;</li>
            <li></li>
          </ol>

      </div>
    )
  }
};
