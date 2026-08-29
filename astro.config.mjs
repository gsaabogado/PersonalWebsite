// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import devEdit from "./tools/dev-edit-plugin.mjs";

export default defineConfig({
  // The apex 301-redirects to www, so www is the canonical host. Anything
  // derived from `site` (canonical tags, og:url, the sitemap) must point
  // there, or we advertise URLs that redirect.
  site: "https://www.luissarmiento.com",
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    // The i18n block makes the sitemap carry EN/ES alternates. It pairs pages
    // by path after the locale prefix, so the two outreach pages (translated
    // slugs) simply stay unpaired here; BaseLayout's own hreflang tags cover
    // them.
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
      // `/es/corneta` is an unlisted pitch page. It carries `noindex` in
      // BaseLayout; listing it in the sitemap would hand crawlers the very URL
      // the tag asks them to forget, so the two have to agree.
      filter: (page) => !/\/es\/corneta\/?$/.test(new URL(page).pathname),
      // BaseLayout's canonical strips the trailing slash, so the sitemap has to
      // strip it too. Advertising `/research/` while the page's own canonical
      // says `/research` makes the two disagree about the same page.
      serialize: (item) => {
        const trim = (u) => u.replace(/(.)\/$/, "$1");
        item.url = trim(item.url);
        item.links = item.links?.map((l) => ({ ...l, url: trim(l.url) }));
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), devEdit()],
  },
});
