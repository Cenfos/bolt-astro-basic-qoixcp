/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: "en",
  supportedLanguages: ["en", "es", "pt", "fr"],
  i18next: {
    debug: true,
    initImmediate: false,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextPlugins: { fsBackend: "i18next-fs-backend" },
};