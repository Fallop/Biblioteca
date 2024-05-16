import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  createLoanBook,
  updateLoanBook,
  getLoanBook,
  deleteLoanBook,
} from "../api/LoanBooks.api";
import { getAllBooks } from "../api/Books.api";
import { getAllBorrowers } from "../api/Borrower.api";

export function LoanBooksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const payload = {
        book: parseInt(data.book, 10), // Ensure the book ID is an integer
        user: parseInt(data.user, 10), // Ensure the user ID is an integer
        date: data.date,
        dateReturn: data.dateReturn,
      };

      if (params.id) {
        await updateLoanBook(params.id, payload);
        toast.success("Prestamo Actualizado", {
          position: "bottom-right",
          style: { background: "#101010", color: "#fff" },
        });
      } else {
        await createLoanBook(payload);
        toast.success("Nuevo Prestamo Añadido", {
          position: "bottom-right",
          style: { background: "#101010", color: "#fff" },
        });
      }
      navigate("/prestamolibros");
    } catch (error) {
      toast.error("Error al guardar el prestamo");
    }
  });

  useEffect(() => {
    async function loadLoanBook() {
      if (params.id) {
        try {
          const { data } = await getLoanBook(params.id);
          setValue("book", data.book);
          setValue("user", data.user);
          setValue("date", data.date);
          setValue("dateReturn", data.dateReturn);
        } catch (error) {
          console.error("Error loading loan book:", error);
          toast.error("Error loading loan book");
        }
      }
    }
    loadLoanBook();
  }, [params.id, setValue]);

  useEffect(() => {
    async function fetchBooksAndUsers() {
      const booksResponse = await getAllBooks();
      const usersResponse = await getAllBorrowers();
      setBooks(booksResponse.data);
      setUsers(usersResponse.data);
    }
    fetchBooksAndUsers();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <div>
          <label>Libro</label>
          <select
            {...register("book", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-2"
          >
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
          {errors.book && (
            <span className="block text-red-700 text-xs mb-3">
              Este Campo es Requerido
            </span>
          )}
        </div>
        <div>
          <label>Prestatario</label>
          <select
            {...register("user", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-2"
          >
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          {errors.user && (
            <span className="block text-red-700 text-xs mb-3">
              Este Campo es Requerido
            </span>
          )}
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-2"
          />
          {errors.date && (
            <span className="block text-red-700 text-xs mb-3">
              Este Campo es Requerido
            </span>
          )}
        </div>
        <div>
          <label>Date Return</label>
          <input
            type="date"
            {...register("dateReturn", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-2"
          />
          {errors.dateReturn && (
            <span className="block text-red-700 text-xs mb-3">
              Este Campo es Requerido
            </span>
          )}
        </div>
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3 ">
          Guardar
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                await deleteLoanBook(params.id);
                toast.success("Prestamo Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/prestamolibros");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
