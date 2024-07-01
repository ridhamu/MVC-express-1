import { Router } from "express";
import {
  createBook,
  deleteBookHandler,
  getBookByIdHanlder,
  getBooks,
  updateBookHandler,
} from "../controllers/bookControllers";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookByIdHanlder);
router.post("/books", createBook);
router.put('/books/:id', updateBookHandler);
router.delete('/books/:id', deleteBookHandler);

export default router;
