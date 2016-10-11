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
		handler:userCtrl.get,
		config
	},
	// POST /users
	{
		method:'POST',
		path:'/users',
		handler: userCtrl.post,
		config
	}
];