import { Request, Response } from "express";
import { addBook, listBook, getBookById, updateBook, deleteBook } from "../models/bookModel";

export const createBook = (req: Request, res: Response): void => {
  const newBook = addBook(req.body);
  res.status(201).json(newBook);
};

export const getBooks = (req: Request, res: Response): void => {
  const books = listBook();
  res.status(201).json(books);
};

export const getBookByIdHanlder = (req: Request, res: Response): void => {
  const id: number = Number(req.params.id);
  const book = getBookById(id);

  if (book) {
    res.status(201).json(book);
  } else {
    res.status(401).json({ message: "book not found!" });
  }
};

export const updateBookHandler = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    const updatedListBooks = updateBook(id, req.body); 
    if(updatedListBooks){
        res.status(201).json(updatedListBooks); 
    }else{
        res.status(401).json({message: 'book not found!'}); 
    }
}

export const deleteBookHandler = (req: Request, res: Response): void => {
    const id: number = Number(req.params.id);
    const updatedListBooks = deleteBook(id);
    if(updatedListBooks){
        res.status(201).json(updatedListBooks);
    }else{
        res.status(401).json({message: 'book not found!'})
    }
}
