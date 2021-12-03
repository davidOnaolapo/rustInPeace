const nftRouter = require('./routes/nft_router')

const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

require('dotenv').config();

var app = express();
var cors = require("cors");
const fetch = require("node-fetch");

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const uri = `mongodb+srv://${dbUser}:${dbPass}@rustinpeace.v7384.mongodb.net/test`;
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to database..."))
	.catch(err => console.error(err));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Resource routes are mounted here
app.use('/nfts', nftRouter)

const port = process.env.PORT || 3001

app.listen(port, () => {
	console.log(`server running at ${port}`);
});


//Homepage
app.use('/', (req, res) => {
    res.json("ISLAND BOAY");
});

module.exports = { app };