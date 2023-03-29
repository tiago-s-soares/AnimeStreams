const database = require("../db/database")

const getPlayer = (req, res) => {

    const path = req.url
    const title = req.query.title

    database.getAnimes(title, function(episodes) {
        res.render('player.ejs', { title, path, episodes })
    });
}

module.exports = {
    getPlayer
}

