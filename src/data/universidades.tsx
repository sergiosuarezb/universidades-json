export interface Universidad {
  id: number;
  name: string;
  country: string;
  web: string;
  descripcion: string;
}

export const universidades: Universidad[] = [
  {
    id: 0,
    name: "Universidad Nacional de Colombia",
    country: "Colombia",
    web: "https://unal.edu.co",
    descripcion: "Universidad pública líder en investigación en Colombia."
  },
  {
    id: 1,
    name: "Universidad de los Andes",
    country: "Colombia",
    web: "https://uniandes.edu.co",
    descripcion: "Universidad privada de alto nivel académico."
  },
  {
    id: 2,
    name: "Universidad de Antioquia",
    country: "Colombia",
    web: "https://udea.edu.co",
    descripcion: "Institución pública reconocida a nivel nacional."
  },
  {
    id: 3,
    name: "Universidad del Valle",
    country: "Colombia",
    web: "https://univalle.edu.co",
    descripcion: "Universidad pública destacada en el suroccidente."
  }
];