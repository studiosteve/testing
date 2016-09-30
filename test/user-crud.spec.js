// Required data and chai.expect
const data = require('../app'),
	request = require('supertest'),
	app = require('../app'),
	expect = require('chai').expect,
	requested = request('http://localhost:4000');

// Test to create a new user
// Describe is a mocha function that takes the name of the test & a callback(cb)
describe('create user', ()=>{

	// Inside of the anonymous function goes the 'it' function which takes a description of a passing test and a cb
	it('it should have +1 user after saving',done=>{
		
		var usersBefore;
		var usersAfter;
		var newUser = {name:'studiosteve', email:'studiosteve@me.com',password:'bacon'};

		// Check how many Users are in the database (db)
		requested
		.get('/users')
		.end((err,res)=>{
			usersBefore = JSON.parse(res.text).length;
		});
		
		// Check how many Users are in the db after post attempt
		requested
		.post('/users')
		.type('form')
		.send(newUser)
		.end((err,res)=>{
			return;
		});

		requested
		.get('/users')
		.end((err,res)=>{
			usersAfter = JSON.parse(res.text).length;
			expect(usersAfter).to.equal(usersBefore + 1);
			done();
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