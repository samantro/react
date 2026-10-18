import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("h1", { id: "heading", key: "ehfiwhuewj" }, "Hello worled from React!"),
  React.createElement("h2", { id: "heading" , key: "ncdisuyfsoi"}, "Hello worled from React!"),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
