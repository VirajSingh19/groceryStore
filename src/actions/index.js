export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const SEARCH_GROCERY = "SEARCH_GROCERY";
export const EMPTY_BASKET = "EMPTY_BASKET";
export const TOGGLE_PURCHASE = "TOGGLE_PURCHASE";
export const CHANGE_SECTION = "CHANGE_SECTION";
/**
 * @returns action to search items in grocery list
 * @param {Number} id - id of the item to be searched
 */
export function searchGrocery(text) {
  const action = {
    type: SEARCH_GROCERY,
    text,
  };
  return action;
}

/**
 * @returns action to add item to basket from grocery list
 * @param {Number} id - item.id
 * @param {String} name item.name
 */
export function addItemToBasket(id, name) {
  const action = {
    type: ADD_TO_BASKET,
    id,
    name,
  };
  return action;
}

/**
 * @returns action to empty basket
 */
export function emptyBasket() {
  const action = {
    type: EMPTY_BASKET,
  };
  return action;
}

/**
 * @returns action to mark item as purchased
 * @param {Number} id - item.id
 */
export function toggleItem(id) {
  const action = {
    type: TOGGLE_PURCHASE,
    id,
  };
  return action;
}

/**
 * @returns action to change section
 * @param {String} section - 'all', 'pending','purchased'
 */
export function changeSection(section) {
  const action = {
    type: CHANGE_SECTION,
    section,
  };
  return action;
}
