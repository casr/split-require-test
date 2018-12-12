import React from "react";
import Comp1 from "./comp1";
import Comp2 from "./comp2";

export default class Comp3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>An import of Comp1: </p>
        <Comp1 />
        <p>An import of Comp2: </p>
        <Comp2 />
        <p>Comp 3 here</p>
      </React.Fragment>
    );
  }
}
