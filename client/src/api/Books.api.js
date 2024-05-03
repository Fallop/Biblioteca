import axios from "axios";

const booksApi = axios.create({
    baseURL: `http://localhost:8000/biblioteca/api/v1/libros`,
  });

export const getAllBooks = () => booksApi.get('/')

export const getBook = (id) => booksApi.get(`/${id}`);

export const createBook = (book) => booksApi.post("/", book);

export const updateBook = (id, book) => booksApi.put(`/${id}/`, book);

export const deleteBook = (id) => booksApi.delete(`/${id}`);
