import type { ComponentType } from "react";

export interface IMenuButton {
  icon: ComponentType;
  title: string;
  link: string;
}

interface IconProps {
  className?: string;
}

export interface IFilterButton {
  title: string;
  icon: React.ComponentType<IconProps>;
  link: string;
}

export interface IFilm {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface ISortedFilms {
  title: string;
  films: IFilm[];
}

export interface IFilmsCarousel {
  collections: IFilm[];
  slidesPerView: number | 'auto';
  spaceBetween: number;
  initialslide?: number;
  breakpoints?: {
    [width: number]: {
      slidesPerView?: number | "auto";
      spaceBetween?: number;
      centeredSlides?: boolean;
    };
  };
}
