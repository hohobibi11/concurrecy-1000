const router = require('express').Router();
const accountController = require('../controllers/accountController');

router.put('/balance', accountController.updateBalance);

module.exports = router;
