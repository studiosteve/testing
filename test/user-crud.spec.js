// Required data and chai.expect
const data = require('../app'),
	request = require('supertest'),
	app = require('../app'),
	expect = require('chai').expect,
	mongoose = require('mongoose'),
	User = require('../models/User'),
	requested = request('http://localhost:4000');


// Add a beforeEach to seed the db
beforeEach(()=>{
	var newUsers = [
	{name:'studiosteve', email:'studiosteve@me.com',password:'bacon'},
	{name:'l8niteMike', email:'mike@me.com', password:'poek'},
	{name:'stevejrmc', email:'stevemc@me.com', password:'swine'},
	{name:'theDude', email:'thedude@me.com', password:'dudeism'}
	];

	newUsers.map(user=>{
		requested
		.post('/users')
		.type('form')
		.send(user)
		.end((err,res)=>{
			return;
		});
	});	
});

// Add a afterEach to sanitize the db
afterEach(()=>{
	User.find({}).remove().exec();
	return;
});


// Test to create a new user
// Describe is a mocha function that takes the name of the test & a callback(cb)
describe('create user', ()=>{

	// Inside of the anonymous function goes the 'it' function which takes a description of a passing test and a cb
	it('it should have +1 user after saving',done=>{
		
		var usersBefore;
		var usersAfter;
		var newUser = {name:'Enoch', email:'enochb@me.com', password:'ancient'};

		// Check how many Users are in the database (db)
		requested
		.get('/users')
		.end((err,res)=>{
			usersBefore = JSON.parse(res.text).length;
			requested
			.post('/users')
			.type('form')
			.send(newUser)
			.end((err,res)=>{
				// Check how many Users are in the db after post attempt
				requested
				.get('/users')
				.end((err,resp)=>{
					usersAfter = JSON.parse(resp.text).length;
					expect(usersAfter).to.equal(usersBefore + 1);
					done();
				});
			});
		});
	});
});

// Test to get(read) all users
describe('read users', ()=>{

	it('it should return all users in database', done=>{
		requested
		.get('/users')
		.end((err,res)=>{
			expect(res.status).to.equal(200);
			done();
		});
	});
});

// Test to get(read) one user
// describe('read user', ()=>{

// 	it('it should return a specific user from the database', done=>{
// 		requested
// 		.get('/users/:id')
// 		.end()
// 	});
// });









