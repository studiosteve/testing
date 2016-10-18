var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var postSchema = new Schema({
	title:String,
	body:String,
	createdOn: {type:Date,default: Date.now},
	user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

var Post = mongoose.model('Post',postSchema);

module.exports = Post;