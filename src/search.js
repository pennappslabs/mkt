// receives all user input
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
	document.getElementById('searchObj')
	);


// displays a bar for prioritized tags
var TagBar = React.createClass({
	render: function() {
		return (
		<div id = "tag-bar">
				<div class = "tagBarText">
					<ol>#textbooks</ol> 
					<ol>#electronics</ol> 
					<ol>#art </ol>
					<ol>#bikes</ol> 
					<ol>#clothes and accesories</ol> 
					<ol>#free</ol> 
					<ol>#tickets</ol> 
					<ol>#halloween</ol> 
					<ol>#lost</ol> 
					<ol>#found</ol> 
					<ol>#rentals</ol> 
					<ol>#subleases</ol> 
					<ol>#animals</ol> 
					<ol>#tools</ol> 
					<ol>#party</ol> 
				</div>
		</div>
	  );
	}
});

React.render(
	<TagBar />,
	document.getElementById('tagBarObj')
	);


// contains the entirety of the example

// displays and filters the data collection based on user collection 

// displays a row for each product