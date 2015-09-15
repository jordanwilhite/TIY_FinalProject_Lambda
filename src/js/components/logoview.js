import React from 'react';

export default class LogoView extends React.Component {
  render(){
    return(
      <div>
        <img src={"../Lambda Logo/PNG/Lambda-Medium.png"}></img>
        <h1 className="maintitle">lambda</h1>
        <h2 className="subtitle">a physics aid | &lambda;</h2>
        <h3 className="author"> jordan wilhite | an iron yard final project</h3>
      </div>
    )
  }
};
