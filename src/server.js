require('dotenv').config();
import express from "express";
import initWebRoutes from "./routes/web";

let app = express();

//Config view engine

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 3000;
app.listen(port, () =>console.log(`Building a login system with NodeJS is running on port ${port}!`));
