import express from "express";
import helmet from "helmet";
//import weatherRoutes from "./routes/weather.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { notFound } from "./middlewares/notFound.middleware.js";
import handleAPI from './controllers/handleAPI.js';
import bodyParser from "body-parser";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(bodyParser.json())

//handle weather API
app.get('/', (req, res) => handleAPI(req, res))

app.use(notFound);
app.use(errorHandler);

export default app;
