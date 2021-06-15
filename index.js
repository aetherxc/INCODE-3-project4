//Ant

const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const port = 3000

app.use(express.json());
app.use(express.urlencoded()); //Take information from URL

// Set port to 300
const PORT = process.env.PORT || 3000
// Connect to database
const { pgp } = require('pg');

// look for static files in 'public' folder
app.use(express.static ('public'))

//postgres setup
const db = require('./database');
const { Router } = require('express');

app.listen(port, () => {
    console.log(`Project 4 app listening at http://localhost:${port}`)
}) 

//-----------------------------------------------------

//Aseer
const expressLayouts = require('express-ejs-layouts')

//set templating engine
app.use(expressLayouts);
app.set('layout', './layouts/layout')
app.set('view engine','ejs');

//router files
const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')

//Routes
app.use('pages/login', loginRouter)
app.use('/signup', signupRouter)

