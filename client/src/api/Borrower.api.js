import axios from "axios";

const borrowersApi = axios.create({
    baseURL: `http://localhost:8000/biblioteca/api/v1/prestatarios`,
  });

export const getAllBorrowers = () => borrowersApi.get('/')

export const getBorrower = (id) => borrowersApi.get(`/${id}`);

export const createBorrower = (borrower) => borrowersApi.post("/", borrower);

export const updateBorrower = (id, borrower) => borrowersApi.put(`/${id}/`, borrower);

export const deleteBorrower = (id) => borrowersApi.delete(`/${id}`);
