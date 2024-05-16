import { BookList } from "../components/BookList";
import { Link } from "react-router-dom";

export function BooksPage() {
  return (
    <div>
      <Link to="http://localhost:5173/libros-create" className="bg-indigo-500 p-3 rounded-lg my-10 inline-block">
        Agregar Libro +
      </Link>
      <BookList />
    </div>
  );
}
