const express = require('express');
const app = express();
const beerRouter = require('./routes/beerRouter');
const mongoose = require('mongoose');


//handles only get requests for 


app.use('/beers', beerRouter)

//catches all requests
app.use('/', (req, res) => {
    console.log('Something hit me!');
    res.send(`<h1>Welcome to the beer API</h1>`);
})

//listen without specifying a port number

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})