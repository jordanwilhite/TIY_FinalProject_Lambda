import React from 'react';
import LogoView from "./logoview.js";
import SearchView from "./searchview.js";
import MechanicsView from "./mechanicsview.js";
import WavesView from "./wavesview.js";
import ElectricityView from "./electricityview.js";

var App = React.createClass ({
  render: function(){
    return(
    <div>
      <LogoView />
      <SearchView />
      <MechanicsView />
      <WavesView />
      <ElectricityView />
    </div>
    )
  }
});

export default App;
