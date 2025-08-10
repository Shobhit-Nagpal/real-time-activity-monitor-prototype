import { client } from "../services/redis.js";

export const getTest = async (req, res) => {
  console.log("GOTTEM: ", req.method);
  await client.set("method", req.method);
  const res1 = await client.xAdd("req:data", "*", {
    method: req.method
  });
  console.log("req:test:id", res1);
  console.log("req:test:length", await client.xLen("req:test"));
  // Send the data to Redis
  res.send();
};
