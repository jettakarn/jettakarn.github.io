import { shared, locales } from "./i18n.js";

/** @deprecated Use i18n.js — kept for any lingering imports */
export const cvData = {
  ...shared,
  name: locales.en.name,
  ...locales.en,
};
