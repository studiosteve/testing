// Require User Model
var User = require('../models/User');

var userCtrl = {
	get(req,rep){
		return User.find({}).exec((err,result)=>{
			if (err) return "Internal DB error: " + err;
			rep(result);
		}); 
	},

	getUser(req,rep){
		return User.find(req.params.uid).exec((err,result)=>{
			if(err) return "Internal DB error: " + err;
			rep(result);
		});
	},

	post(req,rep){
		var user = new User(req.payload);
		user.save();
		rep(user);
	}
};

module.exports = userCtrl;
