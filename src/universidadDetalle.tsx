import { useParams } from "react-router-dom";
import { universidades } from "./data/universidades";

export default function UniversidadDetalle() {
  const { id } = useParams();

  const uni = universidades.find(u => u.id === Number(id));

  if (!uni) return <p>No encontrada</p>;

  const agregarFavorito = () => {
    const favs = JSON.parse(localStorage.getItem("favoritos") || "[]");

    if (!favs.find((f: any) => f.id === uni.id)) {
      favs.push(uni);
      localStorage.setItem("favoritos", JSON.stringify(favs));
      alert("Agregada a favoritos");
    } else {
      alert("Ya está en favoritos");
    }
  };

  return (
    <div>
      <h2>{uni.name}</h2>
      <p>{uni.country}</p>
      <p>{uni.descripcion}</p>

      <button onClick={agregarFavorito}>
        ⭐ Agregar a favoritos
      </button>
    </div>
  );
}
