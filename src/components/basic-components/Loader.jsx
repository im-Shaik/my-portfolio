import React from "react";
import "../basic-components/loader.css";

const Loader = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "jelly-triangle" },
      React.createElement("div", { className: "jelly-triangle__dot" }),
      React.createElement("div", { className: "jelly-triangle__traveler" })
    ),
    React.createElement(
      "svg",
      { width: "0", height: "0", className: "jelly-maker" },
      React.createElement(
        "defs",
        null,
        React.createElement(
          "filter",
          { id: "uib-jelly-triangle-ooze" },
          React.createElement("feGaussianBlur", {
            in: "SourceGraphic",
            stdDeviation: "7.3",
            result: "blur",
          }),
          React.createElement("feColorMatrix", {
            in: "blur",
            mode: "matrix",
            values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",
            result: "ooze",
          }),
          React.createElement("feBlend", {
            in: "SourceGraphic",
            in2: "ooze",
          })
        )
      )
    )
  );
};

export default Loader;
