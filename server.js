
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// Print logs to the console and compress pages we send
// app.use(express.logger());
// app.use(express.compress());

// Return all pages in the /views directory
// whenever they are requested at '/'
// e.g., http://localhost:80/index.html
app.use(express.static(__dirname + '/views'));

// Start the server
//var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});