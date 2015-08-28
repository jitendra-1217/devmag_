
var Post = require('../models/posts');
var config = require('../../configs/config')();

module.exports = {

    'getIndex': function(req, res, next) {          //  List all posts

        Post.find({}, function(err, posts) {
            if (err) throw err;                     //  Should display error view

            res.render('listings_post', {
                'title': 'Post Listings',
                'posts': posts,
                'base_url': config.getBaseUrl(),
            });
        });
    },

    'getPost': function(req, res, next) {           //  Get post for given id

        var id = req.params.id;
        Post.findById(req.params.id, function(err, post) {
            if (err) throw err;

            res.render('detail_post', {
                'title': 'Post view',
                'post': post
            });
        });
    }
};
