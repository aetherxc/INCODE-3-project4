const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')
const { query } = require('../database')


router.get('/', redirectToLogin, (req, res) => {
  db.any('SELECT \
            users.firstname, users.surname, users.email, schedules.start_time, schedules.end_time \
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
.catch((err) => {
   res.send(err)
})
})

//maybe??       //Step 3: parameterized routes users is this correct?
//app.get('/users/:id/schedules',(req, res) => {
  // const id = Number(req.params.id)
   //let schedules = []

   //for (i = 0; i < data.schedules.length; i++) {
   //let currentSchedule = data.schedules[i]
   //if ( currentSchedule.user_id === id) {
     //  schedules.push(currentSchedule)
      // }
  // }
   //res.send(schedules); 
//})

module.exports = router