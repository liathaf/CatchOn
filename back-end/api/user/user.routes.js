const express = require('express')
const router = express.Router()
const { getUser } = require('./user.controller')


router.get('/:id', getUser)


module.exports = router