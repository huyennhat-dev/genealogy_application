"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_2 = require("./configs/cors");
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const db_1 = __importDefault(require("./configs/db"));
const environment_1 = __importDefault(require("./configs/environment"));
const swagger_1 = __importDefault(require("./swagger"));
(0, db_1.default)();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)(cors_2.corsOptions));
app.use(express_1.default.json({ limit: "50mb" }));
app.use((0, cookie_parser_1.default)());
app.use(error_handler_1.default);
// Routes
app.use("/api", index_1.default);
// Swagger
app.use(swagger_1.default);
const PORT = Number(environment_1.default.PORT);
const HOST = environment_1.default.HOST;
app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
