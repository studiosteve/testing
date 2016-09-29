// Required data and chai.expect
const data = require('../app'),
	expect = require('chai').expect;

// Test to create a new user
// Describe is a mocha function that takes the name of the test & a callback(cb)
describe('create user', function(){

	// Inside of the anonymous function goes the 'it' function which takes a description of a passing test and a cb
	it('it should have +1 user after saving',function(){

		// Check how many Users are in the database (db)
		var usersBefore = data.users.get();

		// Add Users to the db
		data.users.save({name:'Steve', email:'steve@me.com',password:'bacon'});

		// Check how many Users are in the db after adding
		var usersAfter = data.users.get();

		// Chai expects the number of users to be increased by one
		expect(usersAfter.length).to.equal(usersBefore.length + 1);
	});
});