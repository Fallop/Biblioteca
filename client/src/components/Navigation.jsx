import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
        <Link to="/prestamolibros">
            <h1 className="font-bold text-3xl mb-4">App Biblioteca</h1>
        </Link>
        <button className="bg-indigo-500 p-3 rounded-lg"> 
          <Link to="prestamolibros-create"> Crear Prestamo </Link>
        </button>
        
    </div>
  )
}
