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

var Footer=React.createClass({
	render: function(){
		return React.createElement(
			"footer",
			null,
			React.createElement(
				"div",
				{id:"footerBody"},
				React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{
							href:"http://web.ncku.edu.tw/bin/home.php",
							target:"_blank"
						},
						"National Cheng Kung University"
					)
					
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{
							href:"http://mislab.csie.ncku.edu.tw/",
							target:"_blank"
						},
						"Multimedia Information System Lab"
					)
				)
			)
		);
	}
});