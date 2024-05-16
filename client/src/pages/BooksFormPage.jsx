import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createBook, getBook, updateBook, deleteBook } from "../api/Books.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function BooksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateBook(params.id, data);
      toast.success("Libro Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createBook(data);
      toast.success("Nuevo Libro Añadido", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/libros");
  });

  useEffect(() => {
    async function loadBook() {
      if (params.id) {
        const { data } = await getBook(params.id);
        setValue("title", data.title);
        setValue("editorialName", data.editorialName);
        setValue("autorName", data.autorName);
      }
    }
    loadBook();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-2"
          autoFocus
        />

        {errors.title && (
          <span className="block text-red-700 text-xs mb-3">
            Este Campo es Requerido
          </span>
        )}

        <input
          type="text"
          placeholder="Nombre de la Editorial"
          {...register("editorialName", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-2"
          autoFocus
        />

        {errors.editorialName && (
          <span className="block text-red-700 text-xs mb-3">
            Este Campo es Requerido
          </span>
        )}

        <input
          type="text"
          placeholder="Nombre del Autor"
          {...register("autorName", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-2"
          autoFocus
        />

        {errors.autorName && (
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
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                await deleteBook(params.id);
                toast.success("Libro Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/libros");
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
