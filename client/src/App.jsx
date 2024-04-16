import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoanBooksPage } from "./pages/LoanBooksPage"
import { LoanBooksFormPage } from "./pages/LoanBooksFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation/>

        <Routes>
          <Route path="/" element={<Navigate to="prestamolibros" />} />
          <Route path="/prestamolibros" element={<LoanBooksPage />} />
          <Route path="/prestamolibros-create" element={<LoanBooksFormPage />} />
          <Route path="/prestamolibros/:id" element={<LoanBooksFormPage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App