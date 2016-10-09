// Require User Model
var User = require('../models/User');

module.exports = {
	get:function(){
		return User.find({}).exec((err,result)=>{
			if (err) return "Internal DB error: " + err;
			return result;
		}); 
	},

	post:function(newUser){
		var user = new User(newUser);
		user.save();
		return user;
	}
};
