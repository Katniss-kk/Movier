import type { IFilm, IFilmsCarousel } from "../../types/types";
import style from "./NewCollection.module.css";
import { FilmsCarouselUI } from "../index";

export default function NewCollectionUI({
  collections,
}: {
  collections: IFilm[];
}) {
  if (collections.length === 0) {
    return (
      <div className={style.collectionContainer}>
        <h1 className={style.title}>New collection</h1>
        <p>No films found</p>
      </div>
    );
  }

  const FilmsCarouselProops: IFilmsCarousel = {
    collections: collections,
    slidesPerView: 3.5,
    initialslide: 1,
    spaceBetween: 10,
    // breakpoints
  };

  return (
    <div className={style.collectionContainer}>
      <h1 className={style.title}>New collection</h1>
      <div className={style.swiperWrapper}>
        <FilmsCarouselUI carousel={FilmsCarouselProops} />
      </div>
    </div>
  );
}
