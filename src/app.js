const express = require('express');
const app = express();
const uuid = require('uuid');
const uuidv4 = uuid.v4;
const { multiply } = require('./util.js');

app.get('/', (req, res) => {
    res.status(200).send('Homepage');
});

app.get('/contact', (req, res) => {
    res.status(200).send('Contact');
});

app.get('/multiply', (req, res) => {
    let result = multiply(req.query.n1, req.query.n2);
    res.status(200).send(result.toString());
});

app.get('/user/*', (req, res) => {
    let userObj = {
        username: req.path.split('/').slice(-1)[0],
        uuid: uuidv4()
    };
    res.status(200).send(userObj);
});

module.exports = app;