import express from "express";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notFound.middleware.js";
import handleAPI from "./controllers/handleAPI.js";
import handleSearch from "./controllers/handleSearch.js";
import bodyParser from "body-parser";
import handleCurrentLocation from "./controllers/handleCurrentLocation.js";

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:");
});

const app = express();

app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//handle weather API
app.get("/", (req, res) => {
  res.send("Helloooooo Server is conected");
  console.log(process.env.WEATHER_API_KEY);
});
app.get("/city", (req, res) => handleAPI(req, res));
app.get("/search", (req, res) => handleSearch(req, res));
app.get("/currentlocation", (req, res) => handleCurrentLocation(req, res));

app.use(notFound);
app.use(errorHandler);

export default app;
