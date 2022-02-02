const { Router } = require('express');
const operationsController = require('../controller/operations');

const router = Router();

router.get('/', operationsController.get);

router.get('/expenses', operationsController.getExpenses);

router.get('/income', operationsController.getIncome);

router.post('/', operationsController.create);

router.patch('/:id', operationsController.patch);

router.delete('/:id', operationsController.delete);

module.exports = router;