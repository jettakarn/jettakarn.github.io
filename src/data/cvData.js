import { shared, locales } from "./i18n.js";

/** @deprecated Use i18n.js — kept for any lingering imports */
export const cvData = {
  ...shared,
  ...locales.en,
  skills: {
    languages: shared.skillLanguages,
    competencies: locales.en.competencies,
  },
};
