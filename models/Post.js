var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var postSchema = new Schema({
	title:String,
	body:String,
	createdOn: {type:Date,default: Date.now}
});

var Post = mongoose.model('Post',postSchema);

module.exports = Post;