// This file could also be consider a user route file

// Require User Model
var User = require('../models/User');

// CORS
var config = {
	cors:{
		origin:['*']
	}
};

module.exports = [
	{
		method:'GET',
		path:'/users',
		handler:(req,rep)=>{
			User.find({}).exec((req,result)=>{
				rep(result);
			});
		},
		config
	}
];