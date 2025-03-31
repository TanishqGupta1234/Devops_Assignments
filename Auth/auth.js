const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, "mySecretKey", { expiresIn: "1h" });
};

module.exports = generateToken;
