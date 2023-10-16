import express, { Express, Request, Response, Application } from "express";
import articlesRouter from "./routers/Articles.router";
import dotenv from "dotenv";
import sequelize from "./db/db";

sequelize
  .sync()
  .then(() => console.log("db is ready"))
  .catch((err) => console.log("error on db"));

dotenv.config();

const app: Application = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/articles", articlesRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
