export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeConfig = {
  en: { label: "English", nativeLabel: "English", direction: "ltr", locale: "en_US" },
  ar: { label: "Arabic", nativeLabel: "العربية", direction: "rtl", locale: "ar_AE" },
} as const;

export function localizedPath(locale: Locale, path = "/") {
  if (locale === "en") return path.startsWith("/ar") ? path.replace(/^\/ar(?=\/|$)/, "") || "/" : path;
  if (path === "/") return "/ar";
  if (path.startsWith("/ar")) return path;
  return `/ar${path}`;
}
