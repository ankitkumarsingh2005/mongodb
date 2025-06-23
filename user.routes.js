//require express


const express = require('express');
const router = express.Router();
const{insertUsers} = require("../controllers/user.controllers")


//set up routes

router.post("./insertusesrs", insertUsers);
module.exports = router; 