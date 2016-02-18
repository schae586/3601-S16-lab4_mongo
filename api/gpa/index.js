'use strict';

// Defining the "gpa" API module
// =======================================


var express = require('express');
var controller = require('./gpa.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:course_id', controller.destroy);


module.exports = router;