import React from "react";
import "./Cart.css";

import Search from "../Search/Search";
import GroceryList from "../GroceryList/Grocery";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <Search />
        <GroceryList />
      </div>
    );
  }
}

export default Cart;
