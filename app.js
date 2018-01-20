const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));

app.use(bodyParser.json());


Player = require('./models/player.js')

//Connect to Mongoose
mongoose.connect('mongodb://localhost/olympiquemarseille');
const db = mongoose.connection;

app.get('/', (req,res) => {
    res.send("Allez l'OM");
});

app.get('/api/players', (req, res) => {
    Player.getPlayers((err, players) => {
        if (err) {
            throw err;
        }
        res.json(players);
    });
});

app.get('/api/players/:_id', (req, res) => {
    Player.getPlayerById(req.params._id, (err, player) => {
        if (err) {
            throw err;
        }
        res.json(player);
    });
});

app.post('/api/players', (req, res) => {
    var player = req.body;
    Player.addPlayer(player, (err, player) => {
        if (err) {
            throw err;
        }
        res.json(player);
    });
});

app.put('/api/players/:_id', (req, res) => {
    var id = req.params._id;
    var player = req.body;
    Player.updatePlayer(id, player, {}, (err, player) => {
        if (err) {
            throw err;
        }
        res.json(player);
    });
});

app.delete('/api/players/:_id', (req, res) => {
    var id = req.params._id;
    Player.removePlayer(id, (err, player) => {
        if (err) {
            throw err;
        }
        res.json(player);
    });
});

const PORT = 3000;

app.listen(3000,() => {
    console.log(`Ecoute sur le port ${PORT}`)
});
