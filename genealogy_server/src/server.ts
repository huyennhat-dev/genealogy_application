/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import cors from "cors";
import express from "express";
import routes from "./routes/index";
import cookieParser from "cookie-parser";
import { corsOptions } from "~/configs/cors";
import errorHandler from "~/middleware/error-handler";
import connectDB from "~/configs/db";
import envConfig from "~/configs/environment";
import swaggerApp from "./swagger";
import path from "path";

connectDB();
const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

// Routes
app.use("/api", routes);
app.use("/static", express.static(path.join(__dirname, "uploads")));

// Swagger
app.use(swaggerApp);
app.use(errorHandler);

const PORT: number = Number(envConfig.PORT);
app.listen(PORT, () => {
  console.log(`Server is running on ${envConfig.HOST}:${PORT}`);
});
