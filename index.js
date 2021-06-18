//Ant

const express = require('express')
const app = express()
const { check, validationResult } = require('express-validator')



app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Set port 
const PORT = process.env.PORT || 3000

const hostname = process.env.PG_HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Project 4 app listening at http://localhost:${port}`)
}) 
//-----------------------------------------------------
//Aseer



const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv').config()

//router files
const homeRouter = require('./routes/home.js')
const loginRouter = require('./routes/login.js')
const signupRouter = require('./routes/signup.js')
const logoutRouter = require('./routes/logout.js')
const manage_scheduleRouter = require('./routes/manage_schedule.js')
const user_info_pageRouter = require('./routes/user_info_page.js');
const bodyParser = require('body-parser');

// parse post data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//set templating engine
app.use(expressLayouts);
app.set('layout', './layouts/layout')
app.set('view engine','ejs')


// session setup
app.use(session({
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      // secure: false // must be true if served via HTTPS & false if served via HTTP
    },
    name: 'connect.sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))


//Routes
app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use('/logout', logoutRouter)
app.use('/manage_schedule', manage_scheduleRouter)
app.use('/user_info_page', user_info_pageRouter)

