import { useEffect, useState } from "react";
import { getAllBorrowers } from "../api/Borrower.api";
import { BorrowerCard } from "./BorrowerCard";

export function BorrowerList() {
  const [borrowers, setBorrowers] = useState([]);

  useEffect(() => {
    async function loadBorrowers() {
      const res = await getAllBorrowers();
      setBorrowers(res.data);
    }
    loadBorrowers();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {borrowers.map((borrower) => (
        <BorrowerCard key={borrower.id} borrower={borrower} />
      ))}
    </div>
  );
}