const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  if (req.session) {
    res.clearCookie('cookie')
    req.session.destroy(err => {
      if (err) {
        console.log('error')
        res.status(400).send('Unable to log out')
      } else {
        console.log('2nd last else')
        res.clearCookie('cookie')
        res.redirect('/login')
      }
    });
  } else {
    console.log('last else part')
    res.redirect('/login')
  }
})

module.exports = router