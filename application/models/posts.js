
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//  Embedded document -
var commentSchema = new Schema({
    author: String,             //  *Have it, but not using anywhere in views for simplicity
    comment: String,
    created_at: Date,           //  *Have it, but not using anywhere in views for simplicity
    updated_at: Date
});

var postSchema = new Schema({
    author: String,
    post: String,
    comments: [commentSchema],  // Embedded document - not using referential approach
    created_at: Date,           //  *Have it, but not using anywhere in views for simplicity
    updated_at: Date
});


//  Pre save handlers
postSchema.pre('save', function(next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)   this.created_at = currentDate;

    next();
});

commentSchema.pre('save', function(next) {

    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at)   this.created_at = currentDate;

    next();
});


var Post = mongoose.model('Post', postSchema);

module.exports = Post;
