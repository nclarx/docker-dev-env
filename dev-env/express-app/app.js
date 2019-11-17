// Importing external libraries and setting environment variables
const express = require('express') // gets the express app
const app = express() // creates an instance of Express
const port = 3000 // set the port on which the app will listen for requests

// Importing your modules
const { findAll, findFirst, rawQuery } = require('./data')

console.log(findAll)
app.get('/', (req, res) => {

    html = ``

    findAll().then((data) => {
    	console.table(data)
	res.send(data)
    })
})


app.listen(
    port,
    () => {
        console.log(`Example app listening on port ${port}!`)
    })
