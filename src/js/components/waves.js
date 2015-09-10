import React from 'react';

var WaveVariables = React.createClass({
  render: function (){
   return(
       <div>
         <h1>Wave Variables</h1>
           <ol nameClass="wavelist">
             <li><a href="frequency"></a>f = frequency</li>
             <li>v = speed</li>
             <li>&lambda; = wavelength</li>
           </ol>
         <h1>Formula</h1>
           <ol>
             <li>&lambda; = v/f</li>
            </ol>
      </div>
    )
  }
});


export default WaveVariables
