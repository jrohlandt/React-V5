import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
// import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const SearchParams = lazy(() => import("./SearchParams"));
const Details = lazy(() => import("/Details"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>Loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
