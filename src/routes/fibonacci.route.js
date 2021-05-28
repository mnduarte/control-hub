const express = require('express')
// eslint-disable-next-line new-cap
const router = express.Router()
const fibonacciController = require('../controllers/fibonacci.controller')

router.get('/value/:idx', fibonacciController.getValue)

module.exports = router