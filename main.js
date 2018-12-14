// @flow
const React = require("react");
const ReactDOM = require("react-dom");
const Comp1 = require("./lib/comp1");
const Comp2 = require("./lib/comp2");
const Comp3 = require("./lib/comp3");

class App extends React.Component<{}> {
  render() {
    return (
      React.createElement(React.Fragment, null,
        React.createElement(Comp3),
        React.createElement(Comp1),
        React.createElement(Comp2, { message: "Comp2" }))
    );
  }
}

module.exports = App

ReactDOM.render(React.createElement(App), document.getElementById("react-root"));
