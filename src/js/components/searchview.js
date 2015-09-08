import React from 'react';

var SearchView = React.createClass({
  render: function(){
    return(
      <div className="buttons">
        <button className="tabbtn" type="button">Tables</button>
        <button className="mechbtn" type="button">Mechanics</button>
        <button className="wavbtn" type="button">Waves</button>
        <button className="elcbtn" type="button">Electricity</button>
        <button className="gtbtn" type="button">Geometry & Trigonometry</button>
      </div>
    )
  }
});

export default SearchView;
