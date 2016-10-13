// Required data and chai.expect
const request = require('supertest'),
	expect = require('chai').expect,
	User = require('../models/User'),
	requested = request('http://localhost:4000');


// Add a beforeEach to seed the db
beforeEach(()=>{
	// The uid is for testing purposes
	var newUsers = [
	{name:'studiosteve', email:'studiosteve@me.com',password:'bacon',uid:1},
	{name:'l8niteMike', email:'mike@me.com', password:'poek',uid:2},
	{name:'stevejrmc', email:'stevemc@me.com', password:'swine',uid:3},
	{name:'theDude', email:'thedude@me.com', password:'dudeism',uid:4}
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


// Test to create (post) a new user
// Describe is a mocha function that takes the name of the test & a callback(cb)
describe('POST /user', ()=>{

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

// Test to read (get) all users
describe('GET /users', ()=>{

	it('it should return all users in database', done=>{
		requested
		.get('/users')
		.end((err,res)=>{
			expect(res.status).to.equal(200);
			done();
		});
	});
});

// Test to read (get) a user
describe('GET /users/:id', ()=>{

	it('it should return the user with the id of 2 from the database', done=>{
		requested
		.get('/users/2')
		.end((err,res)=>{
			console.log(res.body.name);
			expect(res.body.name).to.equal("l8niteMike");
			done();
		});
	});
});

// Test to update (put) a user 
// Test to delete a user










