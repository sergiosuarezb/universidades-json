import { useEffect, useState } from "react";

export default function Favoritos() {
  const [favs, setFavs] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoritos") || "[]");
    setFavs(data);
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>

      {favs.length === 0 ? (
        <p>No tienes favoritos</p>
      ) : (
        <ul>
          {favs.map((u) => (
            <li key={u.id}>
              {u.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}