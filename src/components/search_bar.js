import React, { Component } from 'react';

// class-based for added funtionaility
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value})} />
    </div>
    );
  } //single argument means leading parentheses can be dropped
}

// function-based component
// const SearchBar = () => {
//   return <input />;
// };


export default SearchBar;
