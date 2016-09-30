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
	// GET /
	{
		method:'GET',
		path:'/',
		handler:(req,rep)=>{
			rep(req.payload).redirect('/users');
		},
		config
	},
	// GET /users
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
	// POST /users
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