export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const SEARCH_GROCERY = "SEARCH_GROCERY";

/**
 * action to search items in grocery list
 * @param {Number} id - id of the item to be searched
 */
export function searchGrocery(text) {
  const action = {
    type: SEARCH_GROCERY,
    text,
  };
  return action;
}

export function addItemToBasket(id, name) {
  const action = {
    type: ADD_TO_BASKET,
    id,
    name,
  };
  return action;
}
