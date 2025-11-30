import { NavLink } from "react-router-dom";
import type { INewCollection } from "../../types/types";
import style from "./NewCollection.module.css";

export default function NewCollectionUI({
  collections,
}: {
  collections: INewCollection[];
}) {
  return (
    <div className={style.collectionContainer}>
      <h1 className={style.title}>New collection</h1>
      <div className={style.posterContainer}>
        {collections.map((collection) => (
          <NavLink
            key={collection.link}
            to={collection.link}
            className={style.poster}
          >
            <img src={collection.img} alt="" />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
