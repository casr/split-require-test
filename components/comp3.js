const React = require("react");
const Comp1 = require("./comp1");
const Comp2 = require("./comp2");

class Comp3 extends React.Component {
  render() {
    return (
      React.createElement(React.Fragment, null,
        React.createElement("p", null, "An import of Comp1: "),
        React.createElement(Comp1),
        React.createElement("p", null, "An import of Comp2: "),
        React.createElement(Comp2),
        React.createElement("p", null, "Comp 3 here"))
    );
  }
}

module.exports = Comp3;
