import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles/styles.scss'

// imports all images so webpack can compile them
((ctx) => {
  const keys = ctx.keys();
  const values = keys.map(ctx);
  return keys.reduce((o, k, i) => {
    const a = { ...o };
    a[k] = values[i];
    return { ...a };
  }, {});
})(require.context('./assets', true, /.*/));

ReactDOM.render(<App />,
  document.getElementById("root"));