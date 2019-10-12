import { combineReducers } from "redux";
import groceriesJson from "../data/Groceries.json";
import { ADD_ITEM } from "../actions";

function groceries(state = groceriesJson, action) {
  switch (action.type) {
    case ADD_ITEM:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  groceries,
});

export default rootReducer;
