const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const { redirectToLogin } = require('../middleware')



// get req 
router.get('/', redirectToLogin, (req, res) => {
  res.render('pages/new_schedule')
})

// post req



module.exports = router