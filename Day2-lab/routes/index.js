const express = require('express')

const router = express.Router()

const todoRouters = require('./todos')
const usersRouters = require('./users')

router.use('/todos' , todoRouters)
router.use('/users' , usersRouters)

module.exports = router