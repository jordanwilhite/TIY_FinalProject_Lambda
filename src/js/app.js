import React from 'react';

class NavElement extends React.createClass{
    render(){
      return (
        <div>
        <img src=""></img>
        <h1>Lambda | &lambda;</h1>
      <a href="#"><i class="fa fa-arrow-circle-down fa-5x"></i></a>
        </div>
      )
    }
  };
React.render(<NavElement/> , document.getElementById('app'));
