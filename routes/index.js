const router = require('express').Router(); //gets router level middleware
const apiRoutes = require('./apiRoutes');

// routes to apiRoutes
router.use('/api', apiRoutes);

module.exports = router;