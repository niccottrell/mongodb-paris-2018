// Exported routes to Node - last declared hiearchy: bottom may override top
module.exports = function(app) {

	// Test route
	app.get('/test', function(req, res) {
		res.writeHead(200);
		res.write('<h1>I\'m HTML!</h1>');
		res.end();
	});

	// Wildcard route
	app.get('*', function(req, res) {
		res.sendfile('public/views/index.html');
	});
};
