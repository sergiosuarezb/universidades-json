import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Universidad {
  name: string;
  country: string;
  web_pages: string[];
}

export default function UniversidadDetalle() {
  const { id } = useParams();
  const [universidades, setUniversidades] = useState<Universidad[]>([]);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=colombia")
      .then(res => res.json())
      .then(data => setUniversidades(data));
  }, []);

  const uni = universidades[Number(id)];

  if (!uni) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{uni.name}</h2>
      <p>{uni.country}</p>
      <a href={uni.web_pages[0]} target="_blank">
        Ir a la página web
      </a>
    </div>
  );
}