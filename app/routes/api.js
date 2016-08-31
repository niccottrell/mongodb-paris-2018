module.exports = function(app) {
	var mongoose = require('mongoose')
	var Question = require('../models/question')

	// GET route
	app.get('/questions', function(req, res) {
		// Checks the question collection and returns all of them most recent first
		Question
		  .find({})
		  .sort({ _id: -1 })
		  .select({ _id:1, question: 1 })
		  .exec(function(err, questions) {
				res.send(questions);
			});
	});

	// POST route
	app.post('/questions', function (req, res) {
		Question.create({
			question : req.body.question // Bound using Angular
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Question
				.find({})
			  .sort({ _id: -1 })
			  .select({ _id:1, question: 1 })
			  .exec(function(err, questions) {
					res.send(questions);
				});
		});
	});

	// DELETE route
	app.delete('/questions/:model_id', function (req, res) {
		Question.remove({
			_id: req.params.model_id // Bound using Angular
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Question
				.find({})
			  .sort({ _id: -1 })
			  .select({ _id:1, question: 1 })
			  .exec(function(err, questions) {
					res.send(questions);
				});
		});
	});
}
