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

export interface INewCollection {
  link: string
  img: string
}