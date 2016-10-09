// Require Controller
var userCtrl = require('../controllers/users');

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
			var users = userCtrl.get();
			rep(users);
		},
		config
	},
	// POST /users
	{
		method:'POST',
		path:'/users',
		handler:(req,rep)=>{
			var newUser = userCtrl.post(req.payload);
			rep(newUser);
		},
		config
	}
];