import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import UniversidadDetalle from "./universidadDetalle";
import Favoritos from "./Favoritos";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/favoritos">Favoritos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universidad/:id" element={<UniversidadDetalle />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  );
}
