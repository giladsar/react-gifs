import React, { Component } from 'react';

class SearchBar extends Component {
  searchTyping = (event) => {
    this.props.search(event.target);
  }

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.searchTyping}/>
    );
  }
}
export default SearchBar;
