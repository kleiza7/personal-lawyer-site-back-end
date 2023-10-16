import { Router } from "express";
import {
  createArticle,
  getAllArticles,
  getArticleById,
} from "../controllers/Articles.controller";

const router = Router();

router.get("/get-all-articles", getAllArticles);
router.get("/get-article-by-id/:id", getArticleById);
router.post("/create-article", createArticle);

export default router;
