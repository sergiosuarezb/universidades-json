import { useState } from "react";
import { Link } from "react-router-dom";
import {universidades} from "../data/universidades";

export default function Home() {
  const [busqueda, setBusqueda] = useState("");

  const filtradas = universidades.filter(u =>
    u.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Universidades</h1>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {filtradas.map((uni) => (
          <li key={uni.id}>
            <Link to={`/universidad/${uni.id}`}>
              {uni.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
