import React from 'react';
import Parse from 'parse';

export default class SearchBar extends React.Component {

  render() {
    return(
      <div>
        <form className="search">
          <input type="text" placeholder="Search" onChange={this.search}></input>
        </form>
      </div>
    )
  }
}
