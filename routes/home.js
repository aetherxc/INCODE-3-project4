const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')
const { query } = require('../database')



router.get('/', redirectToLogin, (req, res) => {
  db.any('SELECT \
 users.id, users.firstname, users.surname, users.email,  \
 schedules.id_user, schedules.day, schedules.start_time, schedules.end_time \
FROM \
  users \
INNER JOIN \
  schedules \
ON \ users.id = schedules.id_user ' )
  .then((schedules) => {
   console.log(schedules)
  res.render('pages/home', {
    employeeSchedule: schedules
    
  })
})
.catch((err) => {
   res.send(err)
})

})



module.exports = router
