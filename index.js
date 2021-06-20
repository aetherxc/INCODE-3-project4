//Ant

const express = require('express')
const app = express()
const { check, validationResult } = require('express-validator')


app.use(express.static ('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Set port 
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Project 4 app listening at http://localhost:${PORT}`)
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
const employee_infoRouter = require('./routes/employee_info.js')
const new_scheduleRouter = require('./routes/new_schedule.js')
const homepageRouter = require('./routes/home.js')


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
      maxAge: 1000 * 60 * 60},
    name: 'cookie',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)


//Routes
app.use('/', homeRouter)
app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use('/logout', logoutRouter)
app.use('/employee_info', employee_infoRouter)
app.use('/new_schedule', new_scheduleRouter)
app.use('/home', homepageRouter)

