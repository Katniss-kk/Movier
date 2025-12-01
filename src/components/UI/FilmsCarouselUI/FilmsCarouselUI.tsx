import style from "./FilmsCarousel.module.css";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import type { Swiper as SwiperType } from "swiper";
import type { IFilmsCarousel } from "../../types/types";
import { NavLink } from "react-router-dom";

export default function FilmsCarouselUI({
  carousel,
}: {
  carousel: IFilmsCarousel;
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      slidesPerView={carousel.slidesPerView}
      spaceBetween={carousel.spaceBetween}
      initialSlide={carousel.initialslide}
      breakpoints={carousel.breakpoints}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={false}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className={style.swiper}
    >
      {carousel.collections.map((collection) => (
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
  );
}
