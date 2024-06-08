const express = require('express');

const router = express.Router();
const { getCurrentUser } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.get('/users/me', auth, getCurrentUser);

module.exports = router;
