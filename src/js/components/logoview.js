import React from 'react';

var LogoView = React.createClass({
  render: function(){
    return(
      <div>
        <img src={"../Lambda Logo/PNG/Lambda-Medium.png"}></img>
        <h1 className="maintitle">lambda</h1>
        <h2 className="subtitle">a physics aid | &lambda;</h2>
        <h3 className="author"> Jordan Wilhite, 2015 | an iron yard final project</h3>
      </div>
    )
  }
});
export default LogoView;
