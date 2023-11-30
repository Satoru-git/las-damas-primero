const router = require('express').Router();

router.use('/data', require('./dataHotels'));
router.use('/stay', require('./stay'));
router.use('/auth', require('./auth'));

module.exports = router;
