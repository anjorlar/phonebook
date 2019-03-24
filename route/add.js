const express = require('express');
const router = express.Router();

const fs = require('fs');

const contact = []
router.get('/add', (req, res, next) => {
    res.render('add', { pageTitle: 'CONTACTS' })
});

router.post("/add", (req, res, next) => {
    contact.push({name: req.body.name}, { PhoneNo: req.body.PhoneNo }, { Email: req.body.Email });

    // content = '/n' + (req.body.name, req.body.PhoneNo, req.body.Email);
    // fs.writeFile("content.txt", country, (err) => {
    //     if (!err) {
    //         console.log("Done Writing");
    //         res.redirect("/");
    //     }
    // })
    console.log(req.body.name);
    console.log(req.body.PhoneNo);
    console.log(req.body.Email);
    res.redirect("/");
    res.send("<h1>Successfully Created</h1>");
});

module.exports = {
    router,
    contact
};