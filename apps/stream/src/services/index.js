import { initRedis } from "./redis.js";

export async function initServices() {
  try {
    await initRedis();
  } catch (err) {
    console.error("Gottem, services got rekt: ", err);
    process.exit(1);
  }
}

