import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import v1Router from "./v1/router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, try again later.",
  })
);

app.use("/api/v1", v1Router);

app.get("/", (req: Request, res: Response) => {
  res.send("Working!");
});

app.listen(port, () => {
  console.log(`⚡️Server is running at port:${port}`);
});
