import { CATEGORIES_ENUM } from "../utils/categories";

export type CardProps = {
  id: string;
  label: string;
  type: "up" | "down" | "invest";
  category: CATEGORIES_ENUM;
  value: number;
  date: string;
};
