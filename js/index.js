var Navigator = React.createClass({
	displayName: "Navigator",

	render: function render() {
		return React.createElement(
			"ul",
			null,
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "./index.html" },
					"CG2016"
				)
			),
			React.createElement(
				"span",
				null,
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./about.html" },
						"About"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./course.html" },
						"Course"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./Homework.html" },
						"Homework"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "./Project.html" },
						"Project"
					)
				)
			)
		);
	}
});

var Main = React.createClass({
	displayName: "Main",

	render: function render() {
		return React.createElement(
			"header",
			null,
			React.createElement(Navigator, null)
		);
	}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));