const express = require('express');
const router = express.Router();

const addsController = require('../controller/control')

const contact = []
router.get('/add', addsController.getAddContact);
router.post('/add', addsController.postAddContact);
router.get("/delete/:id", addsController.deleteContact);


// router.post("/add", );
module.exports = {
    router,
    contact
};