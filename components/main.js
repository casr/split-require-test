const Loadable = require("react-loadable");
const React = require("react");
const ReactDOM = require("react-dom");
const splitRequire = require("split-require");

const Comp1 = Loadable({
  loader: () => splitRequire("./comp1"),
  loading: () => React.createElement("p", null, "Loading")
});

const Comp2 = Loadable({
  loader: () => splitRequire("./comp2"),
  loading: () => React.createElement("p", null, "Loading")
});

const Comp3 = Loadable({
  loader: () => splitRequire("./comp3"),
  loading: () => React.createElement("p", null, "Loading")
});

class App extends React.Component {
  render() {
    return (
      React.createElement(React.Fragment, null,
        React.createElement(Comp3),
        React.createElement(Comp1),
        React.createElement(Comp2))
    );
  }
}

module.exports = App

ReactDOM.render(React.createElement(App), document.getElementById("react-root"));
