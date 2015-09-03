import React from 'react';
import LogoView from "./logoview.js";
import SearchView from "./searchview.js";

var App = React.createClass ({
  render: function(){
    return(
    <div>
      <LogoView />
      <SearchView />
    </div>
    )
  }
});

export default App;
