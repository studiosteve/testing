// Required data and chai.expect
const request = require('supertest'),
	app = require('../app'),
	expect = require('chai').expect,
	User = require('../models/User'),
	requested = request('http://localhost:4000');

// Add a beforeEach to seed the db
// Add a afterEach to sanitize the db
// Test to create (post) a new post
// Test to read (get) all post
// Test to read (get) a post
// Test to update (put) a post
// Test to delete a post