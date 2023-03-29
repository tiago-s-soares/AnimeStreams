const express = require('express')
const app = express()
const port = '5000'
const mysql = require('mysql2')


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/styles.css'))


// Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/browse', (req, res) => {
    res.render('browse.ejs')
})


app.get('/player', (req, res) => {

    const path = req.url
    const title = req.query.title

    connection.query(
        `SELECT * FROM animes WHERE title = '${title}'`, function (results, fields) {
            const episodes = fields[0].episodes  
            res.render('player.ejs', { title, path, episodes })
        })
    
})


// Listen
app.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`)
})

// SQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'animestreams',
    port: '3306'
});



