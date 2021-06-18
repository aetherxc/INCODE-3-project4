const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const saltRounds = 10

// middleware for users that are already logged in
const loggedInMessage = (req, res, next) => {
  if (req.session.userId) {
    res.render('pages/signup', {
      message: req.query.message ? req.query.message : 'You are already logged in, are you sure you want to sign up?'
    })
  } else {
    next()
  }
}

router.get('/', loggedInMessage, (req, res) => {
  res.render('pages/signup', {
    message: req.query.message
  })
})

module.exports = router