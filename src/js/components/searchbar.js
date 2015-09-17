import React from 'react';
import Parse from 'parse';
import $ from 'jquery';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  handleChange(){
    let searchTerm = React.findDOMNode(this.refs.search).value;
    this.setState({
      searchTerm: searchTerm
    });

    if (searchTerm.trim()) {
      let PhysicsForms = Parse.Object.extend("PhysicsForms");
      let query = new Parse.Query(PhysicsForms);
      query.startsWith("label", toTitleCase(this.state.searchTerm));
      query.ascending();
      query.find().then(list => {
        this.props.handleResults(list);
      });
    }
  }

  render() {
    return(
      <div>
        <form className="search">
          <input type="text" ref="search" placeholder="Search (i.e. area)" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}></input>
        </form>
      </div>
    )
  }
};
