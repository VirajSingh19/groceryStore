export const ADD_ITEM = "ADD_ITEM";

export function addItemById(id) {
  const action = {
    type: ADD_ITEM,
    id,
  };
  return action;
}
