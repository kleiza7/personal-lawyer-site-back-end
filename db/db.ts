import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db", "user", "pass", {
  dialect: "sqlite",
  host: "./db/db.sqlite",
});

export default sequelize;
