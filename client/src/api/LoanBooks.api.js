import axios from "axios";

const loanBooksApi = axios.create({
    baseURL: `http://localhost:8000/prestamolibros/api/v1/prestamolibros`,
  });

export const getAllLoanBooks = () => loanBooksApi.get('/')

export const getLoanBook = (id) => loanBooksApi.get(`/${id}`);

export const createLoanBook = (loanBook) => loanBooksApi.post("/", loanBook);

export const updateLoanBook = (id, loanBook) => loanBooksApi.put(`/${id}/`, loanBook);

export const deleteLoanBook = (id) => loanBooksApi.delete(`/${id}`);
