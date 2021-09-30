module.exports = {
  defaultLocale: 'en-US',
  locales: ['en-US', 'de', 'fr'],
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}.${ns}.json`).then((m) => m.default),
};
