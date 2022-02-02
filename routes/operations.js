const { Router } = require('express');
const operationsController = require('../controller/operations');

const router = Router();

router.get('/', operationsController.get);

router.post('/', operationsController.create);

router.patch('/:id', operationsController.patch);

router.delete('/:id', operationsController.delete);

module.exports = router;