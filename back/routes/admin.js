const express = require('express');
const cors = require('cors');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');
const { getMessages, getUploads } = require('../controllers/adminController');

router.get('/messages', ensureAuthenticated, async(req, res) =>
    getMessages()
);

router.get('/uploads', ensureAuthenticated, async(req, res) =>
    getUploads()
);



module.exports = router;