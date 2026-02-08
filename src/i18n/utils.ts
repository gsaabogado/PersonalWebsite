import { ui, defaultLang, type Lang, type UiKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] || ui[defaultLang][key];
}

export function getLocalePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/es${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === "en" ? "es" : "en";
}

export function getAlternatePath(url: URL): string {
  const lang = getLangFromUrl(url);
  const path = url.pathname;

  if (lang === "en") {
    // Currently English (default), switch to Spanish
    return `/es${path}`;
  } else {
    // Currently Spanish, switch to English
    return path.replace(/^\/es/, "") || "/";
  }
}
