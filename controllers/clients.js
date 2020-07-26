const mongoose = require('mongoose');
const path = require("path");
const Client = require("../models/client");
const fs = require('fs');

module.exports.saveClient = (req, res) => {
  let data;
   Client.clientModel.find({},(error, clients)=> {
     res.redirect("/");
     data = JSON.stringify(clients);
     fs.writeFileSync('data.json',data);
   });
 };

 module.exports.postInsertClient= (req, res) => {
   console.log("body:",req.body);
   const client = new Client.clientModel(req.body);
   client.save(function(err, Clients) {
     if (err) return console.error(err);
     console.log(Clients.name + " saved to database.");
   });

   console.log("insertion complete");
   res.redirect("/");
 }

  module.exports.getInsertClient = (req, res) => {
    res.sendFile(path.join(__dirname,"../views","insert-clients.html"));
  }
