const express = require('express')
const router = express.Router()
const {ROLE} = require('../config/constant')

const AuthMiddleware = require('../middlewares/Authentication')
const BitQueryController = require('../controllers/bitQueryController')

// me
router.get('/getTrx', AuthMiddleware([ROLE.CUSTOMER, ROLE.SPONSOR, ROLE.OWNER]),  BitQueryController.getTrx)

module.exports = router;