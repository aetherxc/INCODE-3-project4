const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const { redirectToHome } = require('../middleware')

// get request - first redirectToHome is hit and if the user is logged in, 
// the login page is rendered
router.get('/', redirectToHome, (req, res) => {
  res.render('pages/login', {
    message: req.query.message
  })
})


// POST - again we check if the user is logged in first with redirecToHome
//
// router.post('/', redirectToHome, (req, res) => {
//   // check if the user exists
//   db.oneOrNone('SELECT * FROM users WHERE email = $1', [req.body.email.toLowerCase()])
//   .then((existingUser) => {
//     // if not, return error
//     if (!existingUser) {
//       return res.redirect('/login?message=Incorrect%20login%20details.')
//     }
//   // check if the user has entered email & pswd
//   if (req.body.email)
//   if (req.body.email === '' || req.body.password === '') {
//     return res.redirect('/login?message=Please%20insert%20both%20email%20and%20password.')
//   }
// }

module.exports = router