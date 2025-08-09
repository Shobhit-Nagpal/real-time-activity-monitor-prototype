import { createClient } from "redis";

const client = createClient({
  url: "redis://localhost:6379",
});

async function initRedis() {
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  console.log("Redis is connected!");
}

export { client, initRedis };
