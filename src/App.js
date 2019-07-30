import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Walter",
      animal: "Raccoon",
      breed: "Kinkajous"
    }),
    React.createElement(Pet, {
      name: "Wagter",
      animal: "Dog",
      breed: "St. Bernard"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
