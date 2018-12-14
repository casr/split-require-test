// @flow
const React = require("react");
const Comp1 = require("./comp1");
const Comp2 = require("./comp2");

type Props = {
  one: string,
  two: string,
  three: string
}

class Comp3 extends React.Component<Props> {
  static defaultProps = {
    one: "one",
    two: "two",
    three: "three"
  }

  render() {
    const { one, ...rest } = this.props
    return (
      React.createElement(React.Fragment, null,
        React.createElement("p", null, "An import of Comp1: "),
        React.createElement(Comp1, { ...rest, one }),
        React.createElement("p", null, "An import of Comp2: "),
        React.createElement(Comp2, { message: "Comp2: loaded from Comp3" }),
        React.createElement("p", null, "Comp 3 here"))
    );
  }
}

module.exports = Comp3;
