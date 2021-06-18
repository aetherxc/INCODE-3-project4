const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const { redirectToHome } = require('../middleware')

// router.get('/login', redirectToHome, (req, res) => {
//   res.render('pages/login')
// })

router.get('/', redirectToHome, (req, res) => {
  res.render('pages/login', {
    message: req.query.message
  })
})

module.exports = router