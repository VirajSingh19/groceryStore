import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "all",
    };
  }

  render() {
    return (
      <div className="main">
        <Header />

        <Cart />

        <Footer filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
