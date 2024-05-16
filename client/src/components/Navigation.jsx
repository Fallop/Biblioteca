import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
        <Link to="/">
            <h1 className="font-bold text-3xl mb-4">App Biblioteca</h1>
        </Link>
        <Link to="libros" className="bg-indigo-500 p-3 rounded-lg inline-block px-20"> Libros </Link>
        <Link to="prestatarios" className="bg-indigo-500 p-3 rounded-lg inline-block px-20"> Prestatarios </Link>
        <Link to="prestamolibros" className="bg-indigo-500 p-3 rounded-lg inline-block px-20"> Prestamo Libros </Link>
    </div>
  )
}
