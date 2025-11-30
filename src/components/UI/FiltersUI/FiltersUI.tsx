import style from "./Filters.module.css";
import { buttons } from "./FilterConstants";
import { NavLink } from "react-router-dom";

export default function FiltersUI() {
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
