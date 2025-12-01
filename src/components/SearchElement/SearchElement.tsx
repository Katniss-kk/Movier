import { useRef, type ChangeEvent } from "react";
import { SearchElementUI } from "../UI";
import { clearFilms, fetchFilmTitleThunk } from "../service/slice/DataFilmSlice";
import { useAppDispatch } from "../service/store";

export default function SearchElement() {
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (value.trim() !== "") {
        dispatch(clearFilms())
        dispatch(fetchFilmTitleThunk(value));
      }
    }, 1000);
  };

  return <SearchElementUI handleChange={handleChange} />;
}
