import { client } from "../services/redis.js";

export const getTest = async (req, res) => {
  console.log("GOTTEM: ", req.method);
  await client.set("method", req.method);
  res.send("Hi");
};
