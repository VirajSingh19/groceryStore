import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <i style={{fontSize:"8em"}} className="basket fa fa-shopping-basket fa-6" aria-hidden="true" />
        <h2 className="helloBasket">Hello, Basket!</h2>
      </div>
    );
  }
}

export default Header;
