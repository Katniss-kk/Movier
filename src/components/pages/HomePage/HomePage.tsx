import { ProfileCard, SearchElement, Filters, NewCollection } from "../../index";
import style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={style.pageContainer}>
      <ProfileCard />
      <SearchElement />
      <Filters />
      <NewCollection/>
    </div>
  );
}
