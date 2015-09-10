import React from 'react';

var WaveVariables = React.createClass({
  render: function (){
   return(
       <div>
         <h1>Waves  & Optics Variables</h1>
           <ol nameClass="wavelist">
             <li>d = separation</li>
             <li>f = frequency or focal length</li>
             <li>h = height</li>
             <li>L = distance</li>
             <li>M = magnification</li>
             <li>m = an interger</li>
             <li>n = index of refraction</li>
             <li>s = distance</li>
             <li>v = speed</li>
             <li>&lambda; = wavelength</li>
             <li>&theta; = angle</li>
           </ol>
         <h1>Formulas</h1>
           <ol>
             <li>&lambda; = v/f</li>
             <li>n = c/v</li>
             <li>n<sub>1</sub>sin&theta;<sub>1</sub> = n<sub>2</sub>sin&theta;<sub>2</sub></li>
             <li>1/s<sub>i</sub> + 1/s<sub>o</sub> = 1/f</li>
             <li>|M| = h<sub>i</sub>/h<sub>o</sub> = s<sub>i</sub>/ s<sub>o</sub></li>
             <li>&Delta;L = m&lambda;</li>
             <li>dsin&theta; = m&lambda;</li>
            </ol>
      </div>
    )
  }
});


export default WaveVariables
