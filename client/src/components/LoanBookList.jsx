import { useEffect, useState } from "react";
import { getAllLoanBooks } from "../api/LoanBooks.api";
import { LoanBookCard } from "./LoanBookCard";

export function LoanBookList() {
  const [loanBooks, setLoanBooks] = useState([]);

  useEffect(() => {
    async function loadLoanBooks() {
      const res = await getAllLoanBooks();
      setLoanBooks(res.data);
    }
    loadLoanBooks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {loanBooks.map((loanBook) => (
        <LoanBookCard key={loanBook.id} loanBook={loanBook} />
      ))}
    </div>
  );
}