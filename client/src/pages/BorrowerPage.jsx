import { BorrowerList } from "../components/BorrowerList";
import { Link } from "react-router-dom";

export function BorrowerPage() {
  return (
    <div>
      <Link to="http://localhost:5173/prestatarios-create" className="bg-indigo-500 p-3 rounded-lg my-10 inline-block"> Agregar Prestatario + </Link>
      <BorrowerList />
    </div>
  );
}
