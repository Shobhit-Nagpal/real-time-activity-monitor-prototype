import express from "express";
import { getTest } from "../controllers/test.js";

const testRouter = express.Router();

testRouter.get("/", getTest);

export { testRouter };
