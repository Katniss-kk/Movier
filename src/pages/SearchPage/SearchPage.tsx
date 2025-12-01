import { SearchElement } from "../../components";
import style from "./SearchPage.module.css";
import { useAppSelector, useAppDispatch } from "../../components/service/store";
import { clearFilms } from "../../components/service/slice/DataFilmSlice";
import type { IFilm } from "../../components/types/types";
import { useEffect } from "react";

export default function SearchPage() {
  const films: IFilm[] = useAppSelector((state) => state.film.films);
  const loading: boolean = useAppSelector((state) => state.film.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearFilms());
  }, [dispatch]);

  if (films.length === 0) {
    if (loading !== false) {
      return (
        <div>
          <h1 className={style.title}>Search...</h1>
        </div>
      );
    } else {
      <div>
        <h1 className={style.title}>Enter a name to search</h1>
      </div>;
    }
  }

  return (
    <div className={style.page}>
      <SearchElement />
      <div className={style.containerFilms}>
        {films.map((film) => (
          <div key={film.imdbID} className={style.film}>
            <h1 className={style.title}>{film.Title}</h1>
            <img src={film.Poster} alt={film.Title} className={style.img} />
            <h2 className={style.year}>{film.Year}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
