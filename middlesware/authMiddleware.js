const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, "mySecretKey");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = protect;
