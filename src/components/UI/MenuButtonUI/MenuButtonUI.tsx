import { NavLink } from "react-router-dom";
import style from "./MenuButton.module.css";
import type { IMenuButton } from "../../types/types";

export default function MenuButtonUI({ buttons }: { buttons: IMenuButton[] }) {
  return (
    <div className={style.buttonContainer}>
      {buttons.map((button) => (
        <NavLink
          key={button.link}
          to={button.link}
          className={({ isActive }) =>
            isActive ? style.linkActive : style.link
          }
        >
          <button.icon />
          <h3 className={style.buttonTitle}>{button.title}</h3>
        </NavLink>
      ))}
    </div>
  );
}
