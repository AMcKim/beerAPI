const express = require('express');
const beerRouter = express.Router();

beerRouter.use('/', (req, res) => {
    res.send('Beer router is working!');
})

module.exports = beerRouter;