const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
// const { redirectToLogin } = require('../middleware')


router.get('/', (req, res) => {
  res.render('pages/logout')
})

module.exports = router