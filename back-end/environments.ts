import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname, ".env"),
});

interface IEnvironments {
  API_URL: string;
  APP_PORT: number;
}

const env: IEnvironments = {
  API_URL: process.env.API_URL!,
  APP_PORT: Number(process.env.APP_PORT),
};

export { env };
