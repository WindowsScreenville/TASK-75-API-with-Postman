const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, "$2b$10$", (err, decoded) => {
                if (err) {
                    res.json ({
                        success: 0,
                        meesage: "INVALID token."
                    });
                }

                else {
                    next();
                }
            });
        }

        else {
            res.json({
                success: 0,
                message: "Access DENIED. Unauthorized user."
            })
        }
    }
}