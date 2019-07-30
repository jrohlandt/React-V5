const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
