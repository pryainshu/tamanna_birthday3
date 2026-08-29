const express = require("express");

const router = express.Router();

const {
  createMessage,
} = require("../controllers/message.controller");


// Leave a Message
router.post("/", createMessage);


module.exports = router;