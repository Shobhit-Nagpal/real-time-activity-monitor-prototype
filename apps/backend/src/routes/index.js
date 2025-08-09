import express from 'express';
import { testRouter } from "./test.js";

const rootRouter = express.Router();

rootRouter.use("/test", testRouter)

export { rootRouter }
