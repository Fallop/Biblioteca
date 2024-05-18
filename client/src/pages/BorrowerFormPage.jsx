import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createBorrower, deleteBorrower, getBorrower, updateBorrower } from "../api/Borrower.api";
import { toast } from "react-hot-toast";

export function BorrowerFormPage() {
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
      await updateBorrower(params.id, data);
      toast.success("Prestatario Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createBorrower(data);
      toast.success("Prestatario Agregado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/prestatarios");
  });

  useEffect(() => {
    async function loadBorrower() {
      if (params.id) {
        const { data } = await getBorrower(params.id);
        setValue("name", data.name);
        setValue("phone", data.phone);
        setValue("direction", data.direction);
      }
    }
    loadBorrower();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.name && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Telefono"
          {...register("phone", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.phone && <span>This field is required</span>}

        <input
          type="text"
          placeholder="Direccion"
          {...register("direction", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.direction && <span>This field is required</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deleteBorrower(params.id);
                toast.success("Task Removed", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/prestatarios");
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