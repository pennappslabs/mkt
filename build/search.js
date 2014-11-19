// 
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
    document.getElementById('searchObj')
);

var TagBar = React.createClass({displayName: 'TagBar',
    render: function() {
        return (
          React.createElement("div", {id : "tag-bar"}, 
          		React.createElement("div", {class : "tagBarText"})
          	) 
        );
    }
});

React.render(
    React.createElement(TagBar, null),
    document.getElementById('tagBarObj')
);