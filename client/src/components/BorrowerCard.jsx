/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function BorrowerCard({ borrower }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointe"
      onClick={() => {
        navigate(`/prestatarios/${borrower.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {borrower.name}
      </h1>
      <div className="flex flex-col items-end text-slate-400">
        <p>{borrower.phone}</p>
        <p className="ml-2">{borrower.direction}</p>
      </div>
    </div>
  );
}