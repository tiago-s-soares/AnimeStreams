const mysql = require('mysql2')

// SQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'animestreams',
    port: '3306'
});

function getAnimes(title, callback) {

    connection.query(
        `SELECT * FROM animes WHERE title = '${title}'`, function (results, fields) {
            const episodes = fields[0].episodes;
            callback(episodes);
        })        
}

module.exports = {
    getAnimes
}