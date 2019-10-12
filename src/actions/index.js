export const ADD_ITEM = "ADD_ITEM";
export const ADD_TO_BASKET = "ADD_TO_BASKET";

export function addItemById(id) {
  const action = {
    type: ADD_ITEM,
    id,
  };
  return action;
}

export function addItemToBasket(id) {
  const action = {
    type: ADD_TO_BASKET,
    id,
  };
  return action;
}
