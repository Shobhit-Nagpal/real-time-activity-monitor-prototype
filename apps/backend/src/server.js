import express from "express";
import { rootRouter } from "./routes/index.js";
import { initServices } from "./services/index.js";
import cors from "cors";
import { monitor } from "./middleware/monitor.js";

const PORT = 3000;

async function initServer() {
  try {
    const app = express();

    await initServices();

    app.use(cors());
    app.use(monitor());
    app.use("/", rootRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server initialization had an error");
    process.exit(1);
  }
}

initServer();
