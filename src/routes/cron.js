const router = require('express').Router();
const cronController = require('../controllers/cronController');

router.get('/', cronController.getAll);
router.get('/workers', cronController.getWorkers);
router.get('/stats', cronController.getStatistics);

module.exports = router;
