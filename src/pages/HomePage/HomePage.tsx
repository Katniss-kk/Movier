import { NavLink } from "react-router-dom";
import {
  ProfileCard,
  SearchElement,
  Filters,
  NewCollection,
} from "../../components/index";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.pageContainer}>
      <ProfileCard />
      <NavLink to={"/search"}>
        <SearchElement />
      </NavLink>
      <Filters />
      <NewCollection />
    </div>
  );
}
