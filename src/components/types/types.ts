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
