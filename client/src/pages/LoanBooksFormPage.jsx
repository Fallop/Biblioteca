import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createLoanBook,
  deleteLoanBook,
  getLoanBook,
  updateLoanBook,
} from "../api/LoanBooks.api";
import { getAllBooks } from "../api/Books.api";
import { getAllBorrowers } from "../api/Borrower.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

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

      if (params.id) {
        await updateLoanBook(params.id, data);
        toast.success("Prestamo Actualizado", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      } else {
        await createLoanBook(data);
        toast.success("Nuevo Prestamo Añadido", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      }
      navigate("/prestamolibros");
    } catch (error) {
      console.error(error);
      toast.error("Error al guardar el prestamo", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
  });

  useEffect(() => {
    async function loadLoanBook() {
      if (params.id) {
        const { data } = await getLoanBook(params.id);
        setValue("book", data.book.id);
        setValue("user", data.user.id);
        setValue("date", data.date);
        setValue("dateReturn", data.dateReturn);
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
        <select
          name="book"
          id="book"
          {...register("book", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full my-1"
        >
          <option value="">Seleccione un libro</option>
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

        <select
          name="user"
          id="user"
          {...register("user", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full my-1"
        >
          <option value="">Seleccione un usuario</option>
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

        <label htmlFor="date">Fecha Prestamo</label>
        <input
          type="date"
          {...register("date", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full my-1"
        />
        {errors.date && (
          <span className="block text-red-700 text-xs mb-3">
            Este Campo es Requerido
          </span>
        )}

        <label htmlFor="dateReturn">Fecha Regreso</label>
        <input
          type="date"
          {...register("dateReturn", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full my-1"
        />
        {errors.dateReturn && (
          <span className="block text-red-700 text-xs mb-3">
            Este Campo es Requerido
          </span>
        )}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3 ">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Estas Seguro?");
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
