// @flow
const React = require("react");

type Props = {
  message: string
}

class Comp2 extends React.Component<Props> {
  render() {
    return React.createElement("p", null, this.props.message);
  }
}

module.exports = Comp2;
