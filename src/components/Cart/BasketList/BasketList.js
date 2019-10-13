import React from "react";
import "./BasketList.css";
import BasketItem from "./BasketItem/BasketItem";
import { connect } from "react-redux";

class Basket extends React.Component {
  render() {
    console.log("basket", this.props.Basket);

    return (
      <div className="blist">
        <h3>
          <i className="fa fa-shopping-basket" aria-hidden="true"></i> Basket
        </h3>
        <br />
        <br />
        <div className="bListItems">
          {this.props.Basket.map((item, index) => {
            return (
              <BasketItem
                key={item.id}
                id={item.id}
                count={item.count}
                purchased={item.purchased}
                name={item.name}
                index={index}
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
    Basket: state.basket,
  };
}

export default connect(
  mapStateToProps,
  null
)(Basket);
