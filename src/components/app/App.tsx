import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuButton } from "../index";
import "../Variable/Variable.css";
import "./App.css";
import { HomePage } from "../pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <MenuButton />
    </Router>
  );
}
