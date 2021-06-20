const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')
const { query } = require('../database')


router.get('/', redirectToLogin, (req, res) => {
  db.any('SELECT \
            users.firstname, users.surname, users.email, \
            schedules.day, schedules.start_time, schedules.end_time \
          FROM \
            users \
          INNER JOIN \
            schedules \
          ON \
            users.id = schedules.id_user \
          WHERE \
          users.id = $1;', [req.session.userId])
    .then((schedule) => {
      console.log(schedule)
      res.render('pages/employee_info', {
          employeeSchedule: schedule
      })
    })
    .catch((err) => {
      res.send(err)
    })
})




module.exports = router