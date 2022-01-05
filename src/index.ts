import "reflect-metadata";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as bodyParser from "body-parser";
import { Routers } from "./Routers/routes";
import "./Schema";

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", Routers);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
