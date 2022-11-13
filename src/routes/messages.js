const {
    getMessages,
    addMessage,
    } = require("../controllers/message.controller");

const router = require("express").Router();

router.get("/messages", getMessages);
router.post("/messages", addMessage);

module.exports = router;
