import { combineReducers } from "redux";
import groceriesJson from "../data/Groceries.json";
import { ADD_ITEM, ADD_TO_BASKET } from "../actions";

function groceries(state = groceriesJson, action) {
  switch (action.type) {
    case ADD_ITEM:
      getNameById(action.id);
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

function basket(state = [], action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [...state, { id: action.id, name: getNameById(action.id) }];
    default:
      return state;
  }
}

function getNameById(id) {
  const element = groceriesJson.find(function(element) {
    return element.id === id;
  });
  return element.name;
  // console.log("getName by id", id, z);
}

const rootReducer = combineReducers({
  basket,
  groceries,
});

export default rootReducer;
