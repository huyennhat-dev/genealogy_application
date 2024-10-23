"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
require("dotenv/config");
const envConfigSchema = zod_1.z.object({
    MONGODB_URL: zod_1.z.string(),
    BUILD_MODE: zod_1.z.string().default("dev"),
    JWT_SECRET: zod_1.z.string(),
    JWT_EXPIRES_IN: zod_1.z.string(),
    PORT: zod_1.z.string().default("3000"),
    HOST: zod_1.z.string().default("localhost"),
});
const envConfigProject = envConfigSchema.safeParse({
    MONGODB_URL: process.env.MONGODB_URL,
    BUILD_MODE: process.env.BUILD_MODE,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    PORT: process.env.PORT,
    HOST: process.env.HOST
});
if (!envConfigProject.success) {
    console.error(envConfigProject.error.issues);
    throw new Error("The declared values in the .env file are invalid.");
}
const envConfig = envConfigProject.data;
exports.default = envConfig;
