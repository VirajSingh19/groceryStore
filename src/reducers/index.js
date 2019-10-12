import groceriesJson from "../data/Groceries.json";

function groceries(state = groceriesJson, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default groceries;
