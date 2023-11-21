import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML like or XML- like syntax - PARCEL - Babel

// JSX => Babel transpiles it to  React.createElement => ReactElement- JS Object => HTMLElement(render)

//React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

/* React Component
 1.Class Based Component  - Old way of Writing Components
 2.Functional Components  - New way of writing Components
 */
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading"> Namaste React Functional Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

root.render(<HeadingComponent />);
