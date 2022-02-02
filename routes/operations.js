const { Router } = require('express');
const operationsController = require('../controller/operations');

const router = Router();

router.get('/', operationsController.get);

router.post('/', operationsController.create);

module.exports = router;