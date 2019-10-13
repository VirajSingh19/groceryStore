import React from "react";
import "./BasketList.css";
import BasketItem from "./BasketItem/BasketItem";
import { connect } from "react-redux";
import { emptyBasket } from "../../../actions";

class Basket extends React.Component {
  render() {
    //console.log("basket", this.props.Basket, this.props.section);
    const { section } = this.props;
    return (
      <div className="blist">
        <div className="heading">
          <h3>
            {" "}
            <i className="fa fa-shopping-basket" aria-hidden="true" /> Basket
          </h3>

          <i
            onClick={() => this.props.emptyBasket()}
            className="red dim grow empty fa fa-trash"
            aria-hidden="true"
          ></i>
        </div>
        <br />
        <br />
        <div className="bListItems">
          {section === "all"
            ? this.props.Basket.map((item, index) => {
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
              })
            : section === "pending"
            ? this.props.Basket.filter(item => !item.purchased).map(
                (item, index) => {
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
                }
              )
            : this.props.Basket.filter(item => item.purchased).map(
                (item, index) => {
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
                }
              )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Basket: state.basket,
    section: state.section,
  };
}

export default connect(
  mapStateToProps,
  { emptyBasket }
)(Basket);
