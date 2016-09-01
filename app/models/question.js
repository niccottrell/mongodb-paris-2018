var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var QuestionSchema = new Schema ({
	question : {
		type: String
	},
});

module.exports = mongoose.model('Question', QuestionSchema);
