// Users Controller
var userCtrl = require('../controllers/users');

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
			var allUsers = userCtrl.get();
			rep(allUsers);
		},
		config
	}
];