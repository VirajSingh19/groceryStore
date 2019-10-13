import React from "react";
import "./BasketItem.css";
import { connect } from "react-redux";
import { toggleItem } from "../../../../actions";

class BasketItem extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.toggleItem(this.props.id)}
        style={
          this.props.index % 2 === 0
            ? { background: "#efefef" }
            : { background: "#fff" }
        }
        className="basketItem pa2"
      >
        <div className="bbutton grow"> - </div>
        <div className="count"> {this.props.count} </div>
        <div
          style={
            this.props.purchased
              ? { textDecorationLine: "line-through" }
              : { textDecorationLine: "none" }
          }
          className="btext f4"
        >
          {" "}
          {this.props.name}{" "}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleItem }
)(BasketItem);
