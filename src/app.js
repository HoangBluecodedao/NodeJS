const express = require("express")
const { compile } = require('morgan')
const morgan = require('morgan')
const app = express()


// init middlewares
// app.use(morgan("dev"))
app.use(morgan("combined"))
// morgan("common")
// morgan("short")
// morgan("tiny")
// init db


// init routes
app.get('/', (req, res, next) => {
    return res.status(500).json({
        message: 'welcome'
    })
})

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(200).json({ error: "Something went wrong!" });
});

// handling error

module.exports = app
