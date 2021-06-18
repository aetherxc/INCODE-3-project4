const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const { redirectToLogin } = require('../middleware')


router.get('/', redirectToLogin, (req, res) => {
  res.render('pages/employee_info')
})

module.exports = router