const express = require("express");
const app = express();
const path = require("path");
const client = require("../controllers/clients");
const router = express.Router();
const jsonData = require("../data.json")


router.get("/save-clients",client.saveClient);

router.post("/insert-clients",client.postInsertClient);

router.get("/insert-clients", client.getInsertClient);

router.get("/get-clients", (req,res) =>{
  let data = JSON.parse(JSON.stringify(jsonData));
  console.log("data:",data);
  res.render("index",{clientData: data});
});

router.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,"../views", "home.html"));
  console.log(path.join(__dirname,"../views"))
});



module.exports=router;
