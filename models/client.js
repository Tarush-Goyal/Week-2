const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports.clientModel = mongoose.model("Client", clientSchema);
