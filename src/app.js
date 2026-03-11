import express from "express";
import routes from "./router/index.js";

const app = express();

routes(app);

export default app;
