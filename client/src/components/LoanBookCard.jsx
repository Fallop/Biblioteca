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
        {loanBook.name}
      </h1>
      <p className="text-slate-400">{loanBook.date}</p>
      <p className="text-slate-400">{loanBook.dateReturn}</p>
    </div>
  );
}