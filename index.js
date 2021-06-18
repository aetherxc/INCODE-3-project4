//Ant

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Set port 
const PORT = process.env.PORT || 3000

// look for static files in 'public' folder
app.use(express.static ('public'))

const hostname = process.env.PG_HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;

//console.log(hostname);
//console.log(database);
//console.log(port);

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
// Ant added
const homeRouter = require('./routes/home')


//Routes

app.use('/login', loginRouter)
app.use('/signup', signupRouter)
// Ant addded
app.use('/home', homeRouter)
