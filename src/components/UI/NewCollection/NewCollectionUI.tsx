import { NavLink } from "react-router-dom";
import { useRef } from "react";
import type { IFilm } from "../../types/types";
import style from "./NewCollection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper.css";

export default function NewCollectionUI({
  collections,
}: {
  collections: IFilm[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  if (collections.length === 0) {
    return (
      <div className={style.collectionContainer}>
        <h1 className={style.title}>New collection</h1>
        <p>No films found</p>
      </div>
    );
  }

  return (
    <div className={style.collectionContainer}>
      <h1 className={style.title}>New collection</h1>

      <div className={style.swiperWrapper}>
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={30}
          initialSlide={collections.length / 2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={style.swiper}
        >
          {collections.map((collection) => (
            <SwiperSlide key={collection.imdbID} className={style.swiperSlide}>
              <NavLink
                to={`/catalog/film/${collection.imdbID}`}
                className={style.poster}
              >
                <img
                  src={collection.Poster}
                  alt={collection.Title}
                  className={style.img}
                />
              </NavLink>
            </SwiperSlide>
          ))}
          <div
            className={style.customPrevBtn}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ←
          </div>
          <div
            className={style.customNextBtn}
            onClick={() => swiperRef.current?.slideNext()}
          >
            →
          </div>
        </Swiper>
      </div>
    </div>
  );
}
