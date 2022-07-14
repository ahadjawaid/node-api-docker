import express, { Application } from "express";
import bodyParser from "body-parser";
import connect from "./connect";
import routes from "./routes";
require('dotenv').config()


const port = process.env.PORT;
const mongoURI = 'mongodb://mongo:27017/test';

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connect(mongoURI);
routes(app);

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});