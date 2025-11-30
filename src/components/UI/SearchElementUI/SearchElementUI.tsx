import style from "./SearchElement.module.css";
import { SearchSVG } from "./SearchConstant";
import type { ChangeEvent } from "react";

export default function SearchElementUI({
  handleChange,
}: {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={style.searchContainer}>
      <SearchSVG className={style.searchIcon} />
      <input
        type="text"
        placeholder="Search"
        className={style.input}
        onChange={handleChange}
      />
    </div>
  );
}
