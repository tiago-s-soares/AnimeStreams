const express = require('express');
const router = require('./routes/router');

const app = express()
const port = '3000'

// Static files
app.use(express.static('public'))

// Router
app.use(router);

// Listen
app.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`)
})


