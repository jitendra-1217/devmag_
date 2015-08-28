
var express = require('express');
var config = require('./configs/config')();

var mongoose = require('mongoose');     //  Includign mongodb library
mongoose.connect(config.getMongodbConnUrl());

require('redis');                       // Sharejs dependencies and options
var sharejs = require('share').server;
var sharejsOptions= {
    db: {type: 'redis'}                 //  Using redis for comment sync data storage
};

var app = express();

sharejs.attach(app, sharejsOptions);    //  Attach expressjs server to sharejs

app.set('view engine', 'jade');         // Express app specific configuration
app.set('views',
    [
        './application/views',          // Look into these files for views besides the default ./views folder
        './views'
    ]
);
app.use(express.static('./public'));    //  Serve static files of ./public folder

app.listen(config.port);

app.get('/', function(req, res) {       //  Sample route - for testing

    // res.send('Hello world!');
    res.render('index_page', {
        'title': 'Index page'
    });
});

var posts = require('./routes/posts');  //  Including routes around posts
app.use('/posts', posts);
