import express, { Request, Response } from "express";
import cors from "cors";
import { env } from "../environments";

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();

    this.run();
  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    this.app.use("/", async (req: Request, res: Response): Promise<any> => {
      const API_URL = env.API_URL;

      try {
        const result = await fetch(API_URL);

        if (result.ok) {
          const data = await result.json();
          return res.status(200).json(data);
        }

        return res.status(500).json({
          error: "Server internal error.",
        });
      } catch (error) {
        return res.status(500).json({
          error: "Server internal error.",
        });
      }
    });
  }

  run() {
    this.middlewares();
    this.routes();

    const APP_PORT = env.APP_PORT;

    this.app.listen(APP_PORT, () => {
      console.log(`Server is running on port: ${APP_PORT}`);
    });
  }
}

export default new Server();
