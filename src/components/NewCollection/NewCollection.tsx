import { NewCollectionUI } from "../UI";
import { useAppDispatch, useAppSelector } from "../service/store";
import {
  clearFilms,
  fetchFilmTitleThunk,
} from "../service/slice/DataFilmSlice";
import { useEffect } from "react";

export default function NewCollection() {
  // Custom new film
  const dispatch = useAppDispatch();
  const { films } = useAppSelector((state) => state.film);

  useEffect(() => {
    dispatch(clearFilms());
    dispatch(fetchFilmTitleThunk("star wars"));
  }, [dispatch]);

  console.log(films);

  return <NewCollectionUI collections={films} />;
}
