import React from "react";
import "./BasketItem.css";

class BasketItem extends React.Component {
  render() {
    return (
      <div
        style={
          this.props.id % 2 === 0
            ? { background: "#efefef" }
            : { background: "#fff" }
        }
        className="basketItem pa2"
      >
        <div className="bbutton grow"> - </div>
        <div className="btext f4"> {this.props.name} </div>
      </div>
    );
  }
}

export default BasketItem;
