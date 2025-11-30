import type { ISortedFilms } from "../../types/types";
import style from "./SortedFilms.module.css";

import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper.css";

export default function SortedFilmsUI({ data }: { data: ISortedFilms }) {
  const swiperRef = useRef<SwiperType | null>(null);

  const uniqueFilms = data.films.filter(
    (film, index, self) =>
      index === self.findIndex((f) => f.imdbID === film.imdbID)
  );

  if (data.title === "" || data.films.length === 0) {
    return (
      <div className={style.SortedContainer}>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <div className={style.SortedContainer}>
      <h1 className={style.title}>{data.title}</h1>
      <div className={style.containerList}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={4.5} 
          spaceBetween={30}
          initialSlide={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={style.swiper}
        >
          {uniqueFilms.map((collection) => (
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
        </Swiper>
      </div>
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
    </div>
  );
}
