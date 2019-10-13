import React from "react";
import "./GroceryList.css";
import GroceryItem from "./GroceryItem/GroceryItem";
import { connect } from "react-redux";

class Grocery extends React.Component {
  render() {
    return (
      <div className="glist">
        <h3>
          <i className="fa fa-leaf" aria-hidden="true"></i> Groceries
        </h3>
        <br />
        <br />
        <div className="gListItems">
          {this.props.Groceries.map((item, index) => {
            return (
              <GroceryItem
                key={item.id}
                index={index}
                id={item.id}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Groceries: state.groceries,
  };
}

export default connect(
  mapStateToProps,
  null
)(Grocery);
