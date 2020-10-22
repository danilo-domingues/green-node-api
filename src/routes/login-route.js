const express = require('express');
const router = express.Router();
const controller = require('../controllers/login-controller');



router.post('/createLogin', controller.post);
router.get('/getLogin', controller.get);
router.get('/:id', controller.getById);
router.put('/:id', controller.getById);

module.exports = router;