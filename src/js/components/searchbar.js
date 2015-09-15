import React from 'react';
import Parse from 'parse';
import $ from 'jquery';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  handleChange(){
    this.setState({
      searchTerm: React.findDOMNode(this.refs.search).value
    });

    let PhysicsForms = Parse.Object.extend("PhysicsForms");
    let query = new Parse.Query(PhysicsForms);
    query.startsWith("label", this.state.searchTerm);
    query.ascending();
    query.find().then(list => {
      this.props.handleResults(list);
    });
  }

  render() {
    return(
      <div>
        <form className="search">
          <input type="text" ref="search" placeholder="Search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}></input>
        </form>
      </div>
    )
  }
};
