const express = require('express')
const router = express.Router()
const db = require('../database')
const bcrypt = require('bcrypt')
const { redirectToLogin } = require('../middleware')
const session = require('express-session')



// get req 
router.get('/', redirectToLogin, (req, res) => {
  db.any('SELECT \
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
      res.render('pages/new_schedule', {
        message: req.query.message,
        employeeSchedule: schedule,
        id:req.session.userId
      })
    })
    .catch((err) => {
      res.send(err)
    })
})

// post req
router.post('/', redirectToLogin, (req, res) => {
  const newSchedule = {
    id_user: req.session.userId,
    day: req.body.day,
    start_time: req.body.startTime,
    end_time: req.body.endTime
  }
  db.none('INSERT INTO \
            schedules(id_user, day, start_time, end_time) \
          VALUES ($1, $2, $3, $4);', [newSchedule.id_user, newSchedule.day, newSchedule.start_time, newSchedule.end_time])
    .then(() => {
      res.redirect('/new_schedule?message=new%20schedule%20created.')
    })
    .catch((err) => {
      // error if new timings haven't been inserted into the db
      const message = err.message.replace(/ /g, '%20')
      res.redirect(`/new_schedule?message=${message}`)
    })
  
})


module.exports = router