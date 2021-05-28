const express = require('express')
// eslint-disable-next-line new-cap
const router = express.Router()
const fibonacciRoutes = require('./fibonacci.route')

router.use('/fibonacci', fibonacciRoutes)

module.exports = router