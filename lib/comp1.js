// @flow
const React = require("react");

type State = {
  id: string
}

class Comp1 extends React.Component<{}, State> {
  state = { id: '1' }

  render() {
    return React.createElement("p", null, "Comp " + this.state.id + " here");
  }
}

module.exports = Comp1;
