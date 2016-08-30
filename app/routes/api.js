// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
		Question = require('../models/question')

	// Example API route
	app.get('/questions', function(req, res) {

		// Checks the question collection and returns all of them`
		Question.find(function(err, questions) {

			// returns all people in JSON format
			res.send(questions);
		});
	});

	// Example POST route
	app.post('/questions', function (req, res) {
		Question.create({
			name : req.body.name // Bound using Angular
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Question.find(function(err, models) {
				res.send(models);
			});
		});
	});

	// Example DELETE route
	app.delete('/questions/:model_id', function (req, res) {
		Question.remove({
			_id: req.params.model_id
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Question.find(function(err, models) {
				res.send(models);
			});
		});
	});
}
