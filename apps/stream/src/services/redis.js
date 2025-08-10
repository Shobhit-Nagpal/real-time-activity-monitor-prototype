import { createClient } from "redis";

const client = createClient({
  url: "redis://localhost:6379",
});

async function initRedis() {
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  console.log("Redis is connected!");
}

function startStreamListener(clients) {
  (async () => {
    while (true) {
      const messages = await client.xRead(
        {
          key: "req:data",
          id: "$",
        },
        {
          BLOCK: 0,
        },
      );

      for (const client of clients) {
        client.send(JSON.stringify(messages));
      }
    }
  })().catch((err) =>
    console.error("Stream listener cannot listen to deez:", err),
  );
}

export { client, initRedis, startStreamListener };
