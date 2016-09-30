'use strict'

const hapi = require('hapi'),
	good = require('good'),
	joi = require('joi'),
	mongoose = require('mongoose'),
	routes = require('./routes'),
	server = new hapi.Server();
	// user = require('./models/index');

// Establish connection w/ port & host--host is optional and cause problem in production
server.connection({
	port:4000,
	host:'localhost'
});

// All Routes
server.route(routes);

// Register plugins & start server in callback(cb)
server.register({
	register: good,
	options:{
		reporters:{
			console:[{
				module:'good-squeeze',
				name: 'Squeeze',
				args:[{
					response: '*',
					log:'*'
				}]
			},{
				module:'good-console'
			},'stdout']
		}
	}
}, err=>{
	if (err) {
		throw err;
	}

	server.start(err=>{
		console.log('Server running at:', server.info.uri);
	});
});

// Native promise plugin for mongoose
mongoose.Promise = global.Promise;

// Connecting to mongodb/ connection takes a port the db is listening on & a cbs
mongoose.connect('mongodb://localhost:27017/testing',(err,db)=>{
	if (!err) {
		console.log('Connected to mongo');
	}
});