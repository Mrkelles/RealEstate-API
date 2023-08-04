const express = require('express');
const router = express.Router();
const House = require('../models/House')

//list of houses
router.get('/houses', function (req, res) {
    res.send({ type: 'GET' });
});

//add a new house to the db
router.post('/houses', function (req, res) {
    House.create(req.body).then(function (house) {
        res.send(house);
    }); 
});

//update a house in the db
router.put('/houses/id', function (req, res) {
    res.send({ type: 'PUT' });
});

//delete a house from db
router.delete('/houses/id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router;