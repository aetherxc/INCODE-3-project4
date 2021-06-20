const express = require('express')
const router = express.Router()
const db = require('../database')
const { redirectToLogin } = require('../middleware')


router.get('/', redirectToLogin, (req, res) => {
  db.any('SELECT * FROM schedules WHERE ID_USER = ?' [req.params.id_user])
  .then((schedules) => {
  console.log(schedules)
  res.render('pages/employee_info:id',{
      schedules: schedules
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