/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function LoanBookCard({ loanBook }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/prestamolibros/${loanBook.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {loanBook.book.title} - {loanBook.user.name}
      </h1>
      <p className="text-slate-400"> Prestado: {loanBook.date}</p>
      <p className="text-slate-400"> Regreso: {loanBook.dateReturn}</p>
    </div>
  );
}