const data = require('../app'),
	expect = require('chai').expect;

describe('create user', function(){
	it('it should have +1 user after saving',function(){
		var usersBefore = data.users.get();
		data.users.save({name:'Steve', email:'steve@me.com',password:'bacon'});
		var usersAfter = data.users.get();
		expect(newUsers.length).to.equal(users.length);
	});
});