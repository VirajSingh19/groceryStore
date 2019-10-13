import React from "react";
import "./GroceryItem.css";
import { connect } from "react-redux";
import { addItemToBasket } from "../../../../actions";

class GroceryItem extends React.Component {
  render() {
    return (
      <div
        onClick={() =>
          this.props.addItemToBasket(this.props.id, this.props.name)
        }
        style={
          this.props.index % 2 === 0
            ? { background: "#efefef" }
            : { background: "#fff" }
        }
        className="groceryItem shadow-1"
      >
        <div className="gbutton grow"> + </div>
        <div className="gtext"> {this.props.name} </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addItemToBasket } // mapping dispatch to props
)(GroceryItem);
