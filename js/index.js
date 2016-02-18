var Title=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			{id:"title"},
			React.createElement(TitleElement, null)
		);
	}
});

var Info=React.createClass({
	render:function(){
		return React.createElement(
			"div",
			null
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
			),
			React.createElement(
				Info,
				null
			),
			React.createElement(
				Footer,
				null
			)
		)
	}
});

ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));