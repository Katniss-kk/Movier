import style from "./Filters.module.css";
import { NavLink } from "react-router-dom";
import type { IFilterButton } from "../../types/types";

export default function FiltersUI({ buttons }: { buttons: IFilterButton[] }) {
  return (
    <div className={style.filtersContainer}>
      <h3 className={style.title}>Filters</h3>
      <div className={style.buttonContainer}>
        {buttons.map((button) => (
          <NavLink className={style.button} key={button.title} to={button.link}>
            <div className={style.customButton}>
              {<button.icon className={style.icon} />}
            </div>
            <h4 className={style.buttonTitle}>{button.title}</h4>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
