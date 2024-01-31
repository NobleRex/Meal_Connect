const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const path = require('path');
const reqPath = path.join(__dirname, "../");

const cors = require('cors');

const db = require('./dbService');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(reqPath)));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/BeforeSignIN/index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/BeforeSignIN/index.html'));
});

app.get('/Business.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/BeforeSignIN/Business.html'));
});

app.get('/Charity.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/BeforeSignIN/Charity.html'));
});

app.get('/Pickup.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/BeforeSignIN/Pickup.html'));
});

app.listen(3000, ()=>console.log("Running"));
