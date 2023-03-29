const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player");


// Routes
router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/browse', (req, res) => {
    res.render('browse.ejs')
})

router.get('/player', playerController.getPlayer);




module.exports = router;