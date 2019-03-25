const express = require('express');
const router = express.Router()
const addController = require('../controller/control');

// const { contact } = require('./add')


// router.get('/', (req, res, next) => {
//     res.render('home', { details: contact })
// });

router.get('/', addController.getContact);
// router.get('/', addController.getContactById);

module.exports = router;