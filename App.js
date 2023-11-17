/**
 * Nested Structure using React
 * 
 * <div id="parent">
 * 		<div id="children">
 * 			<h1>I'm h1 tag</h1>
 * 			<h2>I'm h2 tag</h2> // siblings
 * 		</div>
 * 		<div id="child2">
 * 			<h1>I'm h1 tag</h1>
 * 			<h2>I'm h2 tag</h2> // siblings
 * 		</div>
 * </div>
 * React Element(Object) => HTML(Browser Understands)   
 */


// Nested Structures of React 
const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" },
		React.createElement("h1", {}, "I am an h1 tag"),
		React.createElement("h2", {}, "I am an h2 tag")
	),
	React.createElement("div", { id: "child2" },
		React.createElement("h1", {}, "I am an h1 tag"),
		React.createElement("h2", {}, "I am an h2 tag")
	)
);

//JSX

// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Hello World from React!"
// );

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);