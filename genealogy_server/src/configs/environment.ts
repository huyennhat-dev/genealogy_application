import { z } from "zod";
import "dotenv/config";

const envConfigSchema = z.object({
  MONGODB_URL: z.string(),
  BUILD_MODE: z.string().default("dev"),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  PORT: z.string().default("3000"),
  HOST: z.string().default("http://localhost"),
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
export default envConfig;
