import React, { Component } from 'react';
import "./search.css";

class Search extends Component {

  state = {
    value: ""
  }

  onInputChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          className="input"
          placeholder="Search"
          value={this.state.value}
          type="text"
          onChange={this.onInputChange}
        />
        <p>Looking phrase: {this.state.value}</p>
      </form>
    )
  }

}

export default Search;