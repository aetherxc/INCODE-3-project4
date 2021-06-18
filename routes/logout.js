const express = require('express')
const router = express.Router()


// router.get('/', (req, res) => {
//   if (req.session) {
//     res.clearCookie('cookie', { path: '/' })
//     req.session.destroy(err => {
//       if (err) {
//         console.log('error')
//         res.status(400).send('Unable to log out')
//       } else {
//         console.log('2nd last else')
//         res.clearCookie('cookie', { path: '/' })
//         res.render('pages/login')
//       }
//     });
//   } else {
//     console.log('last else part')
//     res.render('pages/login')
//   }
// })

router.get('/', (req, res) => {
  console.log('first scope')
  req.session.destroy( err => {
    console.log('second scope')
    if (err) {
      console.log(err)
      res.send('error')
    } else {
      res.render('pages/login', {logout: "logout successful"})
    }
  })
})

module.exports = router