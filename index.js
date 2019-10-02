const express = require('express');
const app = express();
const beerRouter = require('./routes/beerRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//handles only get requests for 


app.use('/beers', beerRouter)

//catches all requests
app.use('/', (req, res) => {
    console.log('Something hit me!');
    res.send(`<h1>Welcome to the beer API</h1>`);
})

//listen without specifying a port number


mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to the beers database!');
})

mongoose.connection.on('error', (err) => {
    console.log(`Error connecting to the beers database!:\n${err}`);
})

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})