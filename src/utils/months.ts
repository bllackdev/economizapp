export type MonthsProps =
  | "Janeiro"
  | "Fevereiro"
  | "Março"
  | "Abril"
  | "Maio"
  | "Junho"
  | "Julho"
  | "Agosto"
  | "Setembro"
  | "Outubro"
  | "Novembro"
  | "Dezembro";

export const MONTHS = [
  { label: "Janeiro", value: "january" },
  { label: "Fevereiro", value: "february" },
  { label: "Março", value: "march" },
  { label: "Abril", value: "april" },
  { label: "Maio", value: "may" },
  { label: "Junho", value: "june" },
  { label: "Julho", value: "july" },
  { label: "Agosto", value: "august" },
  { label: "Setembro", value: "september" },
  { label: "Outubro", value: "october" },
  { label: "Novembro", value: "november" },
  { label: "Dezembro", value: "december" },
];

export const MONTHS_TOTALIZER = [
  { month: "Janeiro", income: 5200, expense: 4800 },
  { month: "Fevereiro", income: 5200, expense: 4800 },
  { month: "Março", income: 5200, expense: 4800 },
  { month: "Abril", income: 5200, expense: 4800 },
  { month: "Maio", income: 5200, expense: 4800 },
  { month: "Junho", income: 5200, expense: 4800 },
  { month: "Julho", income: 5200, expense: 4800 },
  { month: "Agosto", income: 5200, expense: 4800 },
  { month: "Setembro", income: 5200, expense: 4800 },
  { month: "Outubro", income: 5200, expense: 4800 },
  { month: "Novembro", income: 5200, expense: 4800 },
  { month: "Dezembro", income: 5200, expense: 4800 },
];

export enum MONTHS_ENUM {
  JANUARY = "Janeiro",
  FEBRUARY = "Fevereiro",
  MARCH = "Março",
  APRIL = "Abril",
  MAY = "Maio",
  JUNE = "Junho",
  JULY = "Julho",
  AUGUST = "Agosto",
  SEPTEMBER = "Setembro",
  OCTOBER = "Outubro",
  NOVEMBER = "Novembro",
  DECEMBER = "Dezembro",
}
