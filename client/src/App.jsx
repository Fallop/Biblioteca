import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoanBooksPage } from "./pages/LoanBooksPage"
import { LoanBooksFormPage } from "./pages/LoanBooksFormPage";
import { BooksPage } from "./pages/BooksPage";
import { BooksFormPage } from "./pages/BooksFormPage";
import { BorrowerPage } from "./pages/BorrowerPage";
import { BorrowerFormPage } from "./pages/BorrowerFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation/>

        <Routes>
          <Route path="/" element={<Navigate to="biblioteca" />} />
          <Route path="/prestamolibros" element={<LoanBooksPage />} />
          <Route path="/prestamolibros-create" element={<LoanBooksFormPage />} />
          <Route path="/prestamolibros/:id" element={<LoanBooksFormPage />} />
          <Route path="/libros" element={<BooksPage />} />
          <Route path="/libros-create" element={<BooksFormPage />} />
          <Route path="/libros/:id" element={<BooksFormPage />} />
          <Route path="/prestatarios" element={<BorrowerPage />} />
          <Route path="/prestatarios-create" element={<BorrowerFormPage />} />
          <Route path="/prestatarios/:id" element={<BorrowerFormPage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App