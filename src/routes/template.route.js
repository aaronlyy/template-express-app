const express = require('express');
const controllerTemplate = require('../controllers/template.controller');

const router = express.Router({mergeParams: true})

router.get('/', controllerTemplate.get);
router.post('/', controllerTemplate.post);

module.exports = router;