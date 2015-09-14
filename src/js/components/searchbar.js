import React from 'react';
import Parse from 'parse';
import $ from 'jquery';

var SearchBar = React.createClass({
  render: function() {
    return(
      <div>
        <form className="search">
          <input type="text" placeholder="Search"></input>
          <button type="search" value="Submit" onClick={this.props.Search}>Search</button>
        </form>
      </div>
    )
  },


});


export default SearchBar;
