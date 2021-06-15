const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const saltRounds = 10
router.get('/', (req, res) => {
  res.render('/signup', {
    message: req.query.message
  })
})
module.exports = router