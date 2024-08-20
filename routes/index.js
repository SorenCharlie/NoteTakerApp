const router = require('express').Router(); //gets router level middleware
const apiRoutes = require('./apiRoutes');
const hmtlRoutes = require('./htmlRoutes');

// routes to apiRoutes
router.use('/api', apiRoutes);
router.use('/', hmtlRoutes);

module.exports = router;