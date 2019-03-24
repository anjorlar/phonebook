const express = require('express');
const router = express.Router()
const { contact } = require('./add')
router.get('/', (req, res, next) => {
    res.render('home', { details: contact }, { details: PhoneNo }, { details: Email })
});
module.exports = router;