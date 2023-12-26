import express from "express";
import path from "path";
import dotenv from "dotenv";

const env = dotenv.config();

if (env.error) {
  throw env.error;
}

const envParsed = env.parsed;

const app = express();
const asyncRoute =
  (
    f: (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => void
  ) =>
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): any => {
    return Promise.resolve(f(req, res, next)).catch(next);
  };

app.get("/", (req, res) => {
  (async () => {
    /** */
  })();

  console.log("a");

  console.log("b");

  return res.sendFile("home.html", { root: path.resolve(__dirname, "./view") });
});

app.listen(8080, () => console.log(`Boot server`));
