const mongoose = require('mongoose');

//player Schema
const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },    
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Player = module.exports = mongoose.model('Player', playerSchema);

//Get Players
module.exports.getPlayers = (callback, limit) => {
    Player.find(callback).limit(limit);
}

//Get Player
module.exports.getPlayerById = (id, callback) => {
    Player.findById(id, callback);
}

//Ajouter un joueur
module.exports.addPlayer = (player, callback) => {
    Player.create(player, callback);
}

//Update
module.exports.updatePlayer = (id, player, options, callback) => {
    var query = { _id: id };
    var update = {
        name: player.name,
        prenom:player.prenom,
        position:player.position,
        number:player.number,
        image:player.image  
    }
    Player.findOneAndUpdate(query, update, options, callback);
}

//Supprimer
module.exports.removePlayer = (id, callback) => {
    var query = { _id: id };
    Player.remove(query, callback);
}