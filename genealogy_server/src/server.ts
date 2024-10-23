import cors from "cors";
import express from "express";
import routes from "./routes/index";
import cookieParser from "cookie-parser";
import { corsOptions } from "~/configs/cors";
import errorHandler from "~/middleware/error-handler";
import connectDB from "~/configs/db";
import envConfig from "~/configs/environment";
import swaggerApp from "./swagger";

connectDB();
const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(errorHandler);

// Routes
app.use("/api", routes);

// Swagger
app.use(swaggerApp);

const PORT: number = Number(envConfig.PORT);
app.listen(PORT, () => {
  console.log(`Server is running on ${envConfig.HOST}:${PORT}`);
});
