import React from 'react';

var SearchView = React.creatClass({
  render: function(){
    return(
      <div>
        <button type="button" onClick="alert('button has been clicked')">Tables</button>
        <select>
          <option>test</option>
          <option>test</option>
          <option>test</option>
        </select>
      </div>
    )
  }
});
React.render(<SearchView />, document.getElementById('app'))
