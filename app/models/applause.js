var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ApplauseSchema = new Schema ({
	timestamp : {
		type: Date
	}
});

module.exports = mongoose.model('Applause', ApplauseSchema);
