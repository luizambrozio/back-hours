var mongoose = require('mongoose');

var kittySchema = new mongoose.Schema({
    name: String
  });

module.exports = mongoose.model('User', kittySchema)