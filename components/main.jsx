import Loadable from "react-loadable";
import React from "react";
import ReactDOM from "react-dom";

const Comp1 = Loadable({
  loader: () => import("./comp1"),
  loading: () => <p>Loading</p>
});

const Comp2 = Loadable({
  loader: () => import("./comp2"),
  loading: () => <p>Loading</p>
});

const Comp3 = Loadable({
  loader: () => import("./comp3"),
  loading: () => <p>Loading</p>
});

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Comp3 />
        <Comp1 />
        <Comp2 />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-root"));
