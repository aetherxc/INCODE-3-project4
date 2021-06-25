const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const { redirectToLogin } = require('../middleware')
const { query } = require('../database')



module.exports = router