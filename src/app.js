const express = require("express")
const { compile } = require('morgan')
const { default: helmet} = require('helmet')
const morgan = require('morgan')
require('dotenv').config()
const compression = require("compression")
const app = express()


// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db

require('./dbs/init.mongodb')
// const { checkOverload } = require('./helpers/check.connect')
// checkOverload()

// init routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'welcome'
    })
})

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ error: "Something went wrong!" });
});

// handling error

module.exports = app
