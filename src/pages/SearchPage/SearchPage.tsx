import { SearchElement } from "../../components";
import style from "./SearchPage.module.css";
import { useAppSelector } from "../../components/service/store";
import type { IFilm } from "../../components/types/types";

export default function SearchPage() {
  const films: IFilm[] = useAppSelector((state) => state.film.films);

  return (
    <div className={style.page}>
      <SearchElement />
      <div className={style.containerFilms}>
        {films.map((film) => (
          <div key={film.imdbID} className={style.film}>
            <h1 className={style.title}>{film.Title}</h1>
            <img src={film.Poster} alt={film.Title} className={style.img}/>
            <span className={style.year}>{film.Year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
