var SearchBar = React.createClass({
    render: function() {
        return (
          <div id="search-bar">
            Q: <input type="text" name="query" />
          </div>
        );
    }
});

React.render(
    <SearchBar />,
    document.getElementById('container')
);
