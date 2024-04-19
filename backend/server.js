const app = require('./app')
const DatabaseConnection = require('./config/database');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary');


// If the Uncaught Expection error Occured
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to  Uncaught Expection Error`)
    process.exit(1);
})

// Config for PORT address
dotenv.config({ path: "backend/config/config.env" });

// DataBase Connection
DatabaseConnection();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

const mainServer = app.listen(process.env.PORT, () => {
    console.log(`SERVER IS RUNNING on http://localhost:${process.env.PORT}`)
});


// If the Unhandled Promise Rejection Occured
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection `)

    mainServer.close();
    process.exit(1);
})
