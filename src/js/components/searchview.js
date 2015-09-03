import React from 'react';

var SearchView = React.createClass({
  render: function(){
    return(
      <div>
        <button type="button">Tables</button>
        <select>
          <option>Mechanics</option>
          <option>Electricity</option>
          <option>Waves</option>
          <option>Geometry & Trigonometry</option>
        </select>
      </div>
    )
  }
});

// React.render(<SearchView />, document.getElementById('app'))

export default SearchView;
