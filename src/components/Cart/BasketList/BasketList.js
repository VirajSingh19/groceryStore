import React from "react";
import "./BasketList.css";
import BasketItem from "./BasketItem/BasketItem";
import { connect } from "react-redux";
import { emptyBasket } from "../../../actions";

class Basket extends React.Component {
  render() {
    console.log("basket", this.props.Basket);

    return (
      <div className="blist">
        <div className="heading">
          <h3>
            {" "}
            <i className="fa fa-shopping-basket" aria-hidden="true" /> Basket
          </h3>
          <p
            onClick={() => this.props.emptyBasket()}
            className="empty dim f6 red grow"
          >
            Empty
          </p>
        </div>
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
  { emptyBasket }
)(Basket);
