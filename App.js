const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h1", { id: "heading" }, "Hello worled from React!"),
  React.createElement("h2", { id: "heading" }, "Hello worled from React!"),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
