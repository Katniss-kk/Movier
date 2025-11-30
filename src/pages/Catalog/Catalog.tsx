import style from "./Catalog.module.css";
import { SortedFilmsUI } from "../../components/UI";
import { useEffect, useState } from "react";
import type { ISortedFilms } from "../../components/types/types";
import { fetchFilmsByYear } from "../../components/service/slice/DataFilmSlice";

export default function Catalog() {
  const [films2025, setFilms2025] = useState<ISortedFilms>({
    title: "",
    films: [],
  });

  const [films2024, setFilms2024] = useState<ISortedFilms>({
    title: "",
    films: [],
  });

  const [films2023, setFilms2023] = useState<ISortedFilms>({
    title: "",
    films: [],
  });

  useEffect(() => {
    const loadFilms = async () => {
      try {
        const films2025 = await fetchFilmsByYear("2025");
        const films2024 = await fetchFilmsByYear("2024");
        const films2023 = await fetchFilmsByYear("2023");

        setFilms2025({
          title: "Films 2025",
          films: films2025,
        });

        setFilms2024({
          title: "Films 2024",
          films: films2024,
        });

        setFilms2023({
          title: "Films 2023",
          films: films2023,
        });
      } catch (error) {
        console.error("Failed to load films:", error);
      }
    };

    loadFilms();
  }, []);

  return (
    <div className={style.catalog}>
      <SortedFilmsUI data={films2025} />
      <SortedFilmsUI data={films2024} />
      <SortedFilmsUI data={films2023} />
    </div>
  );
}
