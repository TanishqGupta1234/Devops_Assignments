const express = require("express");
const router = express.Router();
const logger = require("../config/logger");

router.get("/", (req, res) => {
    try {
        res.json({ message: "API is working" });
    } catch (error) {
        logger.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
