import { Model, DataTypes } from "sequelize";
import sequelize from "../db/db";

class Article extends Model {}

Article.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "article",
  }
);

export default Article;
