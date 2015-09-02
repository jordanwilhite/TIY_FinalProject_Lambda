import React from 'react';

class NavElement extends React.createClass{
    render(){
      return (
        <div class="Navigation">
        <img src=""></img>
        <h1>Lambda | &lambda;</h1>

        </div>
      )
    }
  }
React.render(<NavElement/> , document.getElementById('app'));
