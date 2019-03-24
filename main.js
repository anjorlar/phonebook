const express = require("express");
const main = express();

const bodyParser = require('body-parser');

const addRoute = require('./route/add');
const homeRoute = require('./route/home');

main.use(bodyParser.urlencoded({ extended: false }))
main.set("view engine", "pug")

main.use(addRoute.router);
main.use(homeRoute);

main.use((req, res, next) => {
    res.status(404).send('<b>NOT FOUND<b>')
});

main.listen(3000, () => console.log('Port 3000 is listening'));