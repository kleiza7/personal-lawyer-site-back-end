import { Request, Response } from "express";
import Article from "../models/Article.model";

export const getAllArticles = (req: Request, res: Response) => {
  Article.findAll()
    .then((articles) => res.status(200).json(articles))
    .catch((error) => res.status(404).json({ message: error.message }));
};

export const getArticleById = (req: Request, res: Response) => {
  Article.findOne({ where: { id: req.params.id } })
    .then((article) => {
      if (!article) {
        return res
          .status(404)
          .json({ message: "Cannot find article with this id." });
      }
      return res.status(200).json(article);
    })
    .catch((error) => res.status(404).json({ message: error.message }));
};

export const createArticle = (req: Request, res: Response) => {
  Article.create(req.body)
    .then((article) => {
      return res.status(200).json(article);
    })
    .catch((error) => res.status(404).json({ message: error.message }));
};
