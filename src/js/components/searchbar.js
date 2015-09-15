import React from 'react';
import Parse from 'parse';

export default class SearchBar extends React.Component {



  search(e) {
    if (!e.target.value) {
    return searchValue.result([]);
  }

    let PhysicsForms = Parse.Object.extend("PhysicsForms"),
        query = new Parse.Query(PhysicsForms);

    query.startsWith("label", e.target.value);

    query.ascending();
    query.find({
      success: (list) =>{
        searchValue.result(list);
      }
    });
  }

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
