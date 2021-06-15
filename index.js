//Ant

const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());
app.use(express.urlencoded()); //Take information from URL

// Set port 
const PORT = process.env.PORT || 3000
// Connect to database
const { pgp } = require('pg');

// look for static files in 'public' folder
app.use(express.static ('public'))

//postgres setup
const db = require('./database');
const { Router } = require('express');

//ant added line 21-30 14/6
require('dotenv').config()

const hostname = process.env.PG_HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;

console.log(hostname);
console.log(database);
console.log(port);

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

app.use('/login', loginRouter)
app.use('/signup', signupRouter)

