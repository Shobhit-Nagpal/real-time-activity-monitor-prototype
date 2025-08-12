import { client } from "../services/redis.js";
import { parseRequest } from "../utils/request.js";

export function monitor() {
  return async (req, _res, next) => {
    try {
      const httpRequest = parseRequest(req);
      console.log(httpRequest);
      await client.xAdd("req:data", "*", { ...httpRequest });
    } catch (err) {
      console.error("[monitor]: Error", err);
    } finally {
      next();
    }
  };
}
