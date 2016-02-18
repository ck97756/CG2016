var Navigator = React.createClass({
	render: function() {
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

var TitleElement=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			null,
			React.createElement(
				"div",
				{className:"titleBody"},
				React.createElement(
					"div",
					{id:"titleName"},
					"Computer Graphic 2016"
				)
			)
		);
	}
});

var Title=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"title"},
			React.createElement(TitleElement, null)
		);
	}
});

var Main = React.createClass({
	render: function() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Navigator, null)
			),
			React.createElement(
				Title,
				null
			)
		)
	}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));