import { BookList } from "../components/BookList"
import { BorrowerList } from "../components/BorrowerList"
import { LoanBookList } from "../components/LoanBookList"

export function LibraryPage() {
  return (
    <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-4 mt-8" >Libros</h2>
        <BookList/>
        <h2 className="font-bold text-xl mb-4 mt-8" >Prestatarios</h2>
        <BorrowerList/>
        <h2 className="font-bold text-xl mb-4 mt-8" >Prestamos</h2>
        <LoanBookList/>
    </div>
  )
}

