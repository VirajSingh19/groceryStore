import React from "react";
import "./Footer.css";
import { connect } from "react-redux";
import { changeSection } from "../../actions";

class Footer extends React.Component {
  render() {
    const { Section, changeSection } = this.props;
    //console.log("footer props", this.props, "section:", Section);
    return (
      <div className="footer">
        <p
          onClick={() => changeSection("all")}
          style={
            Section === "all"
              ? { textDecoration: "none" }
              : { textDecoration: "underline" }
          }
        >
          All,
        </p>
        <p
          onClick={() => changeSection("pending")}
          style={
            Section === "pending"
              ? { textDecoration: "none" }
              : { textDecoration: "underline" }
          }
        >
          Pending,
        </p>
        <p
          onClick={() => changeSection("purchased")}
          style={
            Section === "purchased"
              ? { textDecoration: "none" }
              : { textDecoration: "underline" }
          }
        >
          Purchased,
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Section: state.section,
  };
}

export default connect(
  mapStateToProps,
  { changeSection }
)(Footer);
