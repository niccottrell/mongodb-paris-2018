var mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Validation helper methods should return booleans
// and should be defined before the schema for readability


// Question Schema
var QuestionSchema = new Schema ({
	name : {
		type: String
	},
});

module.exports = mongoose.model('Question', QuestionSchema);
