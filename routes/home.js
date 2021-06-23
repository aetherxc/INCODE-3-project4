const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')

router.get('/', redirectToLogin, (req, res) => {
  db.any('SELECT * FROM schedules;')
  .then((schedules) => {
  // console.log(schedules)
  res.render('pages/home', {
    employeeSchedule: schedules
  })
})
.catch((err) => {
   res.send(err)
})
})


module.exports = router