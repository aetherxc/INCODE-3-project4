const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')
const { query } = require('../database')


router.get('/:id(\\d+)', redirectToLogin, (req, res) => {
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
          users.id = $1;', [req.params.id? req.params.id : req.session.userId])
    .then((schedule) => {
      console.log(schedule)
      res.render('pages/employee_info', {
          employeeSchedule: schedule,
          id:req.session.userId
      })
    })
    .catch((err) => {
      res.send(err)
    })
})




module.exports = router