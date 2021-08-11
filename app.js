require ("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const cors = require ('cors');

// app.get("/api", (req, res) => {
//     res.json({
//         success: 1,
//         message: "WS TECHNOLOGIES... REST API working."
//     });
// });

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("WS TECHNOLOGIES - Server up and running on PORT: " + process.env.APP_PORT);
});