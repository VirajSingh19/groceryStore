import React from "react";
import { connect } from "react-redux";
import { searchGrocery } from "../../actions";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search pa4">
        <input
          className="inp shadow-5 f4 w-60"
          placeholder="filter for e.g. Apple"
          type="text"
          onChange={event => this.props.searchGrocery(event.target.value)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { searchGrocery }
)(Search);
