'use strict';

// Defining the "pets" API module
// =======================================


var express = require('express');
var controller = require('./pets.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:pet_id', controller.destroy);
router.get('/', controller.heaviestPet);

module.exports = router;