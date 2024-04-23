import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
        <Link to="/biblioteca">
            <h1 className="font-bold text-3xl mb-4">App Biblioteca</h1>
        </Link>
        <button className="bg-indigo-500 p-3 rounded-lg"> 
          <Link to="prestamolibros"> Libros </Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg"> 
          <Link to="prestamolibros"> Prestatarios </Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg"> 
          <Link to="prestamolibros"> Prestamo Libros </Link>
        </button>
    </div>
  )
}
