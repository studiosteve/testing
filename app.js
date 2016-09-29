'use strict'

const hapi = require('hapi'),
	good = require('good'),
	joi = require('joi'),
	mongoose = require('mongoose'),
	server = new hapi.Server();
	// user = require('./models/index');

server.connection({port:4000});
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

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testing',(err,db)=>{
	if (!err) {
		console.log('Connected to mongo');
	}
});