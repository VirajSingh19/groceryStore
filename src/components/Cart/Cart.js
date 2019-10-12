import React from "react";
import "./Cart.css";

import Search from "../Search/Search";
import GroceryList from "./GroceryList/GroceryList";

import BasketList from "./BasketList/BasketList";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <Search className="search" />
        <GroceryList className="grocery" />
        <BasketList className="basket" />
      </div>
    );
  }
}

export default Cart;
