//Ant

const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

//Routes
// app.get('',(req, res) => {
//     res.render('layout')
// })
