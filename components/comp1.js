const React = require("react");

class Comp1 extends React.Component {
  render() {
    return React.createElement("p", null, "Comp 1 here");
  }
}

module.exports = Comp1;
