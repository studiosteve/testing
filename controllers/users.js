// Require User Model
var User = require('../models/User');

// CORS
var config = {
	cors:{
		origin:['*']
	}
};

// Routes
module.exports = [
	{
		method:'GET',
		path:'/',
		handler:(req,rep)=>{
			rep(req.payload).redirect('/users');
		},
		config
	},
	{
		method:'GET',
		path:'/users',
		handler:(req,rep)=>{
			User.find({}).exec((req,result)=>{
				rep(result);
			});
		},
		config
	},
	{
		method:'POST',
		path:'/users',
		handler:(req,rep)=>{
			var user = new User(req.payload);
			user.save();
			rep(user);
		},
		config
	}
];