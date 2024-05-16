import { LoanBookList } from "../components/LoanBookList"
import { Link } from "react-router-dom";

export function LoanBooksPage() {
  return (
    <div>
      <Link to="http://localhost:5173/prestamolibros-create" className="bg-indigo-500 p-3 rounded-lg my-10 inline-block"> Agregar Prestamo Libro + </Link>
      <LoanBookList />
    </div>
  );
}
