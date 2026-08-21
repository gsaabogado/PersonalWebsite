import { ui, defaultLang, type Lang, type UiKey } from "./ui";
import { outreachAlternatePath } from "../data/outreach";

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

  // The outreach section uses translated slugs, so the generic /es prefix rule
  // would send the reader to a 404. Its own pairing wins where it matches.
  const outreach = outreachAlternatePath(path);
  if (outreach) return outreach;

  if (lang === "en") {
    // Currently English (default), switch to Spanish
    return `/es${path}`;
  } else {
    // Currently Spanish, switch to English
    return path.replace(/^\/es/, "") || "/";
  }
}
