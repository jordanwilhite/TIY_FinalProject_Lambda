import React from 'react';

var LogoView = React.createClass({
  render: function(){
    return(
      <div>
        <img src={"../Lambda Logo/PNG/Lambda-Medium.png"}></img>
        <h1>Lambda</h1>
        <h1>a physics aid | &lambda;</h1>
      </div>
    )
  }
});
React.render(<LogoView />, document.getElementById('app'))
