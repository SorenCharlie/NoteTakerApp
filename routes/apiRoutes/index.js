const router = require('express').Router(); //gets router level middleware
const notesRoutes = require('./notesRoutes');

// routes to notesRoutes
router.use('/notes', notesRoutes);


module.exports = router;