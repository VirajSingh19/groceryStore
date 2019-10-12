import React from "react";
import "./GroceryItem.css";

class GroceryItem extends React.Component {
  render() {
    return (
      <div
        style={
          this.props.id % 2 === 0
            ? { background: "#efefef" }
            : { background: "#fff" }
        }
        className="groceryItem pa2"
      >
        <div className="gbutton grow"> + </div>
        <div className="gtext f4"> {this.props.name} </div>
      </div>
    );
  }
}

export default GroceryItem;
