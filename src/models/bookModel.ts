import { title } from "process";

interface Book {
  id?: number;
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Houdini",
    author: "eminem",
    publishedYear: 2024,
    genre: "rap",
  },
  {
    id: 2,
    title: "Have a nice day",
    author: "imase",
    publishedYear: 2022,
    genre: "j-pop",
  },
];

export const addBook = (book: Book): Book => {
  //generate new id for the books
  const newBook: Book = {
    id: generateBookId(),
    title: book.title,
    author: book.author,
    publishedYear: book.publishedYear,
    genre: book.genre,
  };
  books.push(newBook);
  return newBook;
};

export const listBook = (): Book[] => {
  return books.sort((book1, book2) => book1.id! - book2.id!);
};

export const getBookById = (id: number): Book | boolean => {
  const bookIndex: number = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    return books[bookIndex];
  }
  return false;
};

export const updateBook = (
  id: number,
  bookData: Partial<Book>
): Book[] | boolean => {
  const bookIndex: number = books.findIndex((book) => book.id === id);
  if (bookIndex) {
    books[bookIndex] = {
      ...books[bookIndex],
      ...bookData,
    };
    return books;
  }

  return false;
};

export const deleteBook = (id: number): Book[] | boolean => {
  const bookIndex: number = books.findIndex((book) => book.id === id);
  if (bookIndex) {
    books.splice(bookIndex, 1);
    return books;
  }

  return false;
};

function generateBookId(): number {
  const newId: number = books.length + 1;
  return newId;
}
