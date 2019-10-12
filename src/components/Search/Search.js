import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (  
        <div className="search pa4">
          <input className="inp shadow-5 f4 w-60"
            placeholder="filter for e.g. Apple"
            type="text"
          />
        </div>
    );
  }
}

export default Search;
