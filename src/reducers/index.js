import { combineReducers } from "redux";
import groceriesJson from "../data/Groceries.json";
import { ADD_TO_BASKET, SEARCH_GROCERY } from "../actions";

/**
 * this reducer creates store for grocery list
 * @param {[Object]} state - array of objects
 * @param {String} action
 */
function groceries(state = groceriesJson, action) {
  switch (action.type) {
    case SEARCH_GROCERY:
      return groceriesJson.filter(item => {
        // regex search on items
        if (item.name.match(new RegExp(action.text, "i"))) return item;
      });
    default:
      return state;
  }
}

/**
 * this reducer creates store for items in baset
 * @param {[Object]} state - array of objects
 * @param {String} action
 */
function basket(state = [], action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return addToBasket(action.id, action.name, state);
    default:
      return state;
  }
}

/**
 * utility function for adding item to basket
 * @param {Number} id
 * @param {String} name
 * @param {[Object]} state
 */
function addToBasket(id, name, state) {
  for (let i = 0; i < state.length; i++) {
    if (state[i].id === id) {
      state[i].count++;
      return [...state];
    }
  }
  return [...state, { id, name, count: 1, purchased: false }];
}

const rootReducer = combineReducers({
  basket,
  groceries,
});

export default rootReducer;
