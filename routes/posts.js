

var express = require('express');
var router = express.Router();

var postsController = require('../application/controllers/posts.js');

router.get('/', postsController.getIndex);          //  Routes goes here..
router.get('/:id', postsController.getPost);

module.exports = router;
