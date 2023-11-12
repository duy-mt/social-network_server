require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web";
import cors from 'cors';


let app = express();

app.use(cors({ origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 3000;
app.listen(port, () =>console.log(`Building a login system with NodeJS is running on port ${port}!`));
