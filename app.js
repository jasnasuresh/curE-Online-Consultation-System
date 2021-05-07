const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
const mysql=require("mysql");
const dotenv = require("dotenv");
dotenv.config({path: './.env'});
const app=express();

const db= mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password:process.env.pwd,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','hbs');
db.connect( (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("MySQL Connected...")
    }
})
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(5000, () => {
    console.log("Server started on Port 5000");
})