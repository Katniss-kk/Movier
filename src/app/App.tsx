import { Routes, Route, Navigate } from "react-router-dom";
import { MenuButton } from "../components/index";
import "../components/Variable/Variable.css";
import "./App.css";
import { HomePage, Catalog, SearchPage } from "../pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <MenuButton />
    </>
  );
}
