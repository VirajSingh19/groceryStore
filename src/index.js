import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import roootRecucers from "./reducers";
//import { addItemToBasket } from "./actions";
import "font-awesome/css/font-awesome.min.css";
import "tachyons";

const store = createStore(
  roootRecucers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());
//store.subscribe(() => console.log("store", store.getState()));

//store.dispatch(addItemById(2));
//store.dispatch(addItemToBasket(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
