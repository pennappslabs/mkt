var SearchBar = React.createClass({displayName: 'SearchBar',
    render: function() {
        return (
          React.createElement("div", {id: "search-bar"}, 
            "Q: ", React.createElement("input", {type: "text", name: "query"})
          )
        );
    }
});

React.render(
    React.createElement(SearchBar, null),
    document.getElementById('container')
);
