/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/libros/${book.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {book.title}
      </h1>
      <div className="flex justify-end text-slate-400">
        <p>{book.autorName},</p>
        <p className="ml-2">{book.editorialName}</p>
      </div>
    </div>
  );
}