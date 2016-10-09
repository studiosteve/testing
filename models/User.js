var mongoose = require('mongoose'),
	post = require('./Post'),
	Schema = mongoose.Schema;

// User Schema
var	userSchema = new Schema({
		name:String,
		email:Schema.Types.Mixed,
		password:Schema.Types.Mixed,
		// posts:[post]
});

// Email validation
// var eValidator = email=>{
// 	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// 	return emailRegex.test(email.Schema.Types.Mixed);
// };
// User.schema.path('email').validate(validator, 'The e-mail field cannot be empty.');

// User Model
var User = mongoose.model('User',userSchema);


module.exports = User;