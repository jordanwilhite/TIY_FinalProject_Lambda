import React from 'react';
import Parse from 'parse';
import $ from 'jquery';

export default class SearchBar extends React.Component {

  search(e) {

    let PhysicsForms = Parse.Object.extend("PhysicsForms"),
        query = new Parse.Query(PhysicsForms);

    query.startsWith("label", e.target.value);

    query.ascending();
    query.find({
      success: (list) =>{
        // .result(list);
        console.log(list);
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
};
