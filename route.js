const express = require('express');
const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
