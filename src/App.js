import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Walter" animal="Raccoon" breed="Kinkajous" />
      <Pet name="Wagter" animal="Dog" breed="St. Bernard" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
