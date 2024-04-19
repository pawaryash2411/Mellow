const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/AsyncAwaitError");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUploader = require("express-fileupload");
const cors = require('cors');
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: "backend/config/config.env" });
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUploader());
// app.use(express.static(path.join(__dirname, "../frontend/build")))

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
// })

const corsOptions = {
    origin: 'http://localhost:3000',
    'Content-Type': 'Authorization',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// All Routes Imported
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

// Middleware for Errors

module.exports = app;
