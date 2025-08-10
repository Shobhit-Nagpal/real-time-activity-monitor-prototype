import { client } from "../services/redis.js";

export const getTest = async (req, res) => {
  console.log("GOTTEM: ", req.method);
  await client.xAdd("req:data", "*", {
    method: req.method
  });
  res.send();
};
